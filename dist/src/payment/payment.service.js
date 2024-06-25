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
const axios_1 = require("axios");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const payment_schema_1 = require("./schemas/payment.schema");
const user_schema_1 = require("../users/schemas/user.schema");
let PaymentService = PaymentService_1 = class PaymentService {
    constructor(paymentModel, userModel) {
        this.paymentModel = paymentModel;
        this.userModel = userModel;
        this.logger = new common_1.Logger(PaymentService_1.name);
    }
    async processPayment(paymentDto) {
        try {
            const response = await axios_1.default.post('https://api.chapa.co/v1/transaction/initialize', {
                amount: paymentDto.amount,
                currency: 'ETB',
                email: 'ab1rham5ethiopian@gmail.com',
                callback_url: 'http://localhost:3000/payment/verify',
                tx_ref: `tx_ref_${Date.now()}`,
            });
            this.logger.log('Payment initialization response:', response.data);
            if (response.data.status === 'success') {
                return { success: true, message: 'Payment initialized successfully', data: response.data };
            }
            else {
                this.logger.error('Payment initialization failed:', response.data);
                return { success: false, message: 'Payment initialization failed', data: response.data };
            }
        }
        catch (error) {
            this.logger.error('Error processing payment:', error);
            return { success: false, message: 'Payment processing failed' };
        }
    }
    async verifyPayment(txRef, username) {
        try {
            const response = await axios_1.default.get(`https://api.chapa.co/v1/transaction/verify/${txRef}`);
            this.logger.log('Payment verification response:', response.data);
            if (response.data.status === 'success') {
                const user = await this.userModel.findOne({ username });
                if (!user) {
                    this.logger.error('User not found for username:', username);
                    return { success: false, message: 'User not found' };
                }
                const payment = new this.paymentModel({
                    amount: response.data.data.amount,
                    type: response.data.data.type,
                    status: response.data.data.status,
                    transactionReference: txRef,
                    user: user._id,
                    createdAt: new Date(),
                });
                await payment.save();
                return { success: true, message: 'Payment verified and saved successfully', data: response.data };
            }
            else {
                this.logger.error('Payment verification failed:', response.data);
                return { success: false, message: 'Payment verification failed', data: response.data };
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
        mongoose_2.Model])
], PaymentService);
//# sourceMappingURL=payment.service.js.map