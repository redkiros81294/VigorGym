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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassController = void 0;
const common_1 = require("@nestjs/common");
const classes_service_1 = require("./classes.service");
const create_class_dto_1 = require("./dto/create-class.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const chapa_service_1 = require("../chapa-sdk/chapa.service");
const path_1 = require("path");
let ClassController = class ClassController {
    constructor(classService, chapaService) {
        this.classService = classService;
        this.chapaService = chapaService;
    }
    create(createClassDto) {
        return this.classService.create(createClassDto);
    }
    findAll() {
        return this.classService.findAll();
    }
    update(id, createClassDto) {
        return this.classService.update(id, createClassDto);
    }
    delete(id) {
        return this.classService.delete(id);
    }
    async payForClass(classId, body) {
        const response = await this.chapaService.initialize({
            amount: body.amount,
            currency: body.currency,
            email: body.email,
            first_name: body.first_name,
            last_name: body.last_name,
            tx_ref: `class-${classId}-${Date.now()}`,
            callback_url: `http://yourdomain.com/class/${classId}/payment/callback`,
            return_url: `http://yourdomain.com/class/${classId}/payment/return`,
        });
        return response;
    }
    async paymentCallback(classId, txRef) {
        const paymentStatus = await this.chapaService.verify({ tx_ref: txRef });
        if (paymentStatus.status === 'success') {
        }
        return paymentStatus;
    }
    async paymentReturn(classId, txRef) {
        const paymentStatus = await this.chapaService.verify({ tx_ref: txRef });
        if (paymentStatus.status === 'success') {
        }
        return paymentStatus;
    }
    getClassesPage(res) {
        res.sendFile((0, path_1.join)(__dirname, '..', '..', 'public', 'classes.html'));
    }
};
exports.ClassController = ClassController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_class_dto_1.CreateClassDto]),
    __metadata("design:returntype", void 0)
], ClassController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClassController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_class_dto_1.CreateClassDto]),
    __metadata("design:returntype", void 0)
], ClassController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClassController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)(':id/payment'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "payForClass", null);
__decorate([
    (0, common_1.Get)(':id/payment/callback'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('tx_ref')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "paymentCallback", null);
__decorate([
    (0, common_1.Get)(':id/payment/return'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('tx_ref')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ClassController.prototype, "paymentReturn", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClassController.prototype, "getClassesPage", null);
exports.ClassController = ClassController = __decorate([
    (0, common_1.Controller)('classes'),
    __metadata("design:paramtypes", [classes_service_1.ClassService, chapa_service_1.ChapaService])
], ClassController);
//# sourceMappingURL=classes.controller.js.map