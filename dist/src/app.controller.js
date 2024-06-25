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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
let AppController = class AppController {
    getIndex(res) {
        res.sendFile((0, path_1.join)(__dirname, '..', 'public', 'index.html'));
    }
    uploadFile(file) {
        return { filePath: `/uploads/${file.filename}` };
    }
    getProfilePage() {
        return 'profile.html';
    }
    getHomePage(res) {
        res.sendFile((0, path_1.join)(__dirname, '..', 'public', 'index.html'));
    }
    getAboutPage(res) {
        res.sendFile((0, path_1.join)(__dirname, '..', 'public', 'about.html'));
    }
    getContactPage(res) {
        res.sendFile((0, path_1.join)(__dirname, '..', 'public', 'contact.html'));
    }
    getCMembershipPage(res) {
        res.sendFile((0, path_1.join)(__dirname, '..', 'public', 'membership.html'));
    }
    getClassesPage(res) {
        res.sendFile((0, path_1.join)(__dirname, '..', 'public', 'classes.html'));
    }
    getAdminPage(res) {
        res.sendFile((0, path_1.join)(__dirname, '..', 'public', 'admins.html'));
    }
    getblogPage(res) {
        res.sendFile((0, path_1.join)(__dirname, '..', 'public', 'blog.html'));
    }
    getGmembershipPage(res) {
        res.sendFile((0, path_1.join)(__dirname, '..', 'public', 'bm-form.html'));
    }
    getRegPage(res) {
        res.sendFile((0, path_1.join)(__dirname, '..', 'public', 'login.html'));
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getIndex", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                const filename = `${Date.now()}-${file.originalname}`;
                cb(null, filename);
            }
        })
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)('profile'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getProfilePage", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getHomePage", null);
__decorate([
    (0, common_1.Get)('about'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getAboutPage", null);
__decorate([
    (0, common_1.Get)('contact'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getContactPage", null);
__decorate([
    (0, common_1.Get)('membership'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getCMembershipPage", null);
__decorate([
    (0, common_1.Get)('classes'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getClassesPage", null);
__decorate([
    (0, common_1.Get)('admins'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getAdminPage", null);
__decorate([
    (0, common_1.Get)('blog'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getblogPage", null);
__decorate([
    (0, common_1.Get)('bm-form'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getGmembershipPage", null);
__decorate([
    (0, common_1.Get)('authenticate'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getRegPage", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)()
], AppController);
//# sourceMappingURL=app.controller.js.map