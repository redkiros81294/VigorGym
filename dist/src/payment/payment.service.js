"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var PaymentService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const payment_schema_1 = require("./schemas/payment.schema");
const user_schema_1 = require("../users/schemas/user.schema");
const chapa_nestjs_1 = require("chapa-nestjs");
let PaymentService = PaymentService_1 = class PaymentService {
    constructor(paymentModel, userModel, chapaService) {
        this.paymentModel = paymentModel;
        this.userModel = userModel;
        this.chapaService = chapaService;
        this.logger = new common_1.Logger(PaymentService_1.name);
    }
    async processPayment(paymentDto) {
        try {
            const tx_ref = await this.chapaService.generateTransactionReference();
            const response = await this.chapaService.initialize({
                first_name: paymentDto.user.firstName,
                last_name: paymentDto.user.lastName,
                email: paymentDto.user.email,
                currency: 'ETB',
                amount: paymentDto.amount.toString(),
                tx_ref: tx_ref,
                callback_url: 'http://localhost:3000/payment/verify',
                return_url: 'http://localhost:3000/payment/success',
                customization: {
                    title: 'Payment for ' + paymentDto.type,
                    description: 'Payment transaction',
                },
            });
            this.logger.log('Payment initialization response:', response);
            if (response.status === 'success') {
                return { success: true, message: 'Payment initialized successfully', data: response.data };
            }
            else {
                this.logger.error('Payment initialization failed:', response);
                return { success: false, message: 'Payment initialization failed', data: response };
            }
        }
        catch (error) {
            this.logger.error('Error processing payment:', error);
            return { success: false, message: 'Payment processing failed' };
        }
    }
    async verifyPayment(txRef, user) {
        try {
            const response = await this.chapaService.verify({ tx_ref: txRef });
            this.logger.log('Payment verification response:', response);
            if (response.status === 'success') {
                const payment = new this.paymentModel({
                    amount: parseFloat(response.data.amount),
                    type: response.data.type,
                    status: response.data.status,
                    transactionReference: txRef,
                    user: user.username,
                    createdAt: new Date(),
                });
                await payment.save();
                return { success: true, message: 'Payment verified and saved successfully', data: response.data };
            }
            else {
                this.logger.error('Payment verification failed:', response);
                return { success: false, message: 'Payment verification failed', data: response };
            }
        }
        catch (error) {
            this.logger.error('Error verifying payment:', error);
            return { success: false, message: 'Payment verification failed' };
        }
    }
};
exports.PaymentService = PaymentService;
exports.PaymentService = PaymentService = PaymentService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(payment_schema_1.PaymentModel.modelName)),
    __param(1, (0, mongoose_1.InjectModel)(user_schema_1.UserModel.modelName)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        chapa_nestjs_1.ChapaService])
], PaymentService);
//# sourceMappingURL=payment.service.js.map