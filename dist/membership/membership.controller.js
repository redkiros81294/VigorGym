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
exports.MembershipController = void 0;
const common_1 = require("@nestjs/common");
const membership_service_1 = require("./membership.service");
const create_membership_dto_1 = require("./dto/create-membership.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const chapa_service_1 = require("../chapa-sdk/chapa.service");
const path_1 = require("path");
let MembershipController = class MembershipController {
    constructor(membershipService, chapaService) {
        this.membershipService = membershipService;
        this.chapaService = chapaService;
    }
    getMembershipPage(res) {
        res.sendFile((0, path_1.join)(__dirname, '..', '..', 'public', 'membership.html'));
    }
    create(createMembershipDto) {
        return this.membershipService.create(createMembershipDto);
    }
    findAll() {
        return this.membershipService.findAll();
    }
    update(id, createMembershipDto) {
        return this.membershipService.update(id, createMembershipDto);
    }
    delete(id) {
        return this.membershipService.delete(id);
    }
    async payForMembership(membershipId, body) {
        const response = await this.chapaService.initialize({
            amount: body.amount,
            currency: body.currency,
            email: body.email,
            first_name: body.first_name,
            last_name: body.last_name,
            tx_ref: `membership-${membershipId}-${Date.now()}`,
            callback_url: `http://yourdomain.com/membership/${membershipId}/payment/callback`,
            return_url: `http://yourdomain.com/membership/${membershipId}/payment/return`,
        });
        return response;
    }
    async paymentCallback(membershipId, txRef) {
        const paymentStatus = await this.chapaService.verify({ tx_ref: txRef });
        if (paymentStatus.status === 'success') {
        }
        return paymentStatus;
    }
    async paymentReturn(membershipId, txRef) {
        const paymentStatus = await this.chapaService.verify({ tx_ref: txRef });
        if (paymentStatus.status === 'success') {
        }
        return paymentStatus;
    }
};
exports.MembershipController = MembershipController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MembershipController.prototype, "getMembershipPage", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_membership_dto_1.CreateMembershipDto]),
    __metadata("design:returntype", void 0)
], MembershipController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MembershipController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_membership_dto_1.CreateMembershipDto]),
    __metadata("design:returntype", void 0)
], MembershipController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MembershipController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)(':id/payment'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MembershipController.prototype, "payForMembership", null);
__decorate([
    (0, common_1.Get)(':id/payment/callback'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('tx_ref')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], MembershipController.prototype, "paymentCallback", null);
__decorate([
    (0, common_1.Get)(':id/payment/return'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('tx_ref')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], MembershipController.prototype, "paymentReturn", null);
exports.MembershipController = MembershipController = __decorate([
    (0, common_1.Controller)('memberships'),
    __metadata("design:paramtypes", [membership_service_1.MembershipService,
        chapa_service_1.ChapaService])
], MembershipController);
//# sourceMappingURL=membership.controller.js.map