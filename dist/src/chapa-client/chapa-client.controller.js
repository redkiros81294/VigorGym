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
exports.ChapaClientController = void 0;
const common_1 = require("@nestjs/common");
const chapa_service_1 = require("../chapa-sdk/chapa.service");
let ChapaClientController = class ChapaClientController {
    constructor(chapaService) {
        this.chapaService = chapaService;
    }
    async initialize(initializeOptions) {
        const tx_ref = await this.chapaService.generateTransactionReference();
        return this.chapaService.initialize({
            ...initializeOptions,
            tx_ref,
        });
    }
    verify(verifyOptions) {
        return this.chapaService.verify(verifyOptions);
    }
    createSubaccount(createSubaccountOptions) {
        return this.chapaService.createSubaccount(createSubaccountOptions);
    }
};
exports.ChapaClientController = ChapaClientController;
__decorate([
    (0, common_1.Post)('initialize'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChapaClientController.prototype, "initialize", null);
__decorate([
    (0, common_1.Get)('verify/:tx_ref'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChapaClientController.prototype, "verify", null);
__decorate([
    (0, common_1.Post)('subaccount'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChapaClientController.prototype, "createSubaccount", null);
exports.ChapaClientController = ChapaClientController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [chapa_service_1.ChapaService])
], ChapaClientController);
//# sourceMappingURL=chapa-client.controller.js.map