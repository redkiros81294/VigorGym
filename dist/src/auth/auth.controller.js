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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const path_1 = require("path");
const passport_1 = require("@nestjs/passport");
const users_service_1 = require("../users/users.service");
let AuthController = class AuthController {
    constructor(authService, usersService) {
        this.authService = authService;
        this.usersService = usersService;
    }
    getLoginPage(res) {
        res.sendFile((0, path_1.join)(__dirname, '..', '..', 'public', 'login.html'));
    }
    async signUp(body, res) {
        const { username, email, password, confirmPassword, firstName, lastName } = body;
        if (password !== confirmPassword) {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json({ message: 'Passwords do not match' });
        }
        const result = await this.authService.signUp(username, password, email, firstName, lastName);
        if (result.status === common_1.HttpStatus.CREATED) {
            return res.status(common_1.HttpStatus.CREATED).json({ message: 'User created successfully' });
        }
        else {
            return res.status(result.status).json({ message: result.message });
        }
    }
    async login(body, res) {
        const { email, password } = body;
        const result = await this.authService.login(email, password);
        if (result) {
            res.cookie('jwt', result.accessToken, { httpOnly: true });
            const user = await this.usersService.findOneByEmail(email);
            if (user && user.roles.includes('admin')) {
                return res.status(common_1.HttpStatus.OK).json({ redirectUrl: '/admins.html' });
            }
            else {
                return res.status(common_1.HttpStatus.OK).json({ redirectUrl: '/index.html' });
            }
        }
        return res.status(common_1.HttpStatus.UNAUTHORIZED).json({ message: 'Invalid credentials' });
    }
    async getUser(req) {
        const user = await this.usersService.findOneById(req.user.id);
        if (user) {
            return { id: user._id, email: user.email, username: user.username, roles: user.roles };
        }
        return null;
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Get)('login'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getLoginPage", null);
__decorate([
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)('user'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getUser", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        users_service_1.UsersService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map