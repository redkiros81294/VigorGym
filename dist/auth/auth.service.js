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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    validatePassword(password) {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        if (password.length < minLength) {
            throw new common_1.BadRequestException('Password must be at least 8 characters long');
        }
        if (!hasUpperCase) {
            throw new common_1.BadRequestException('Password must contain at least one uppercase letter');
        }
        if (!hasLowerCase) {
            throw new common_1.BadRequestException('Password must contain at least one lowercase letter');
        }
        if (!hasNumber) {
            throw new common_1.BadRequestException('Password must contain at least one number');
        }
        if (!hasSpecialChar) {
            throw new common_1.BadRequestException('Password must contain at least one special character');
        }
    }
    async signUp(username, password, email, firstName, lastName) {
        this.validatePassword(password);
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            username,
            password: hashedPassword,
            email,
            firstName,
            lastName,
            roles: ['user'],
        };
        const user = await this.usersService.create(newUser);
        return { status: 201, message: 'User created successfully', user };
    }
    async login(email, password) {
        const user = await this.usersService.findOneByEmail(email);
        if (user && await bcrypt.compare(password, user.password)) {
            const payload = {
                sub: user.username, email: user.email,
                username: ''
            };
            const token = this.jwtService.sign(payload);
            return { accessToken: token };
        }
        return null;
    }
    async validateUser(username) {
        return this.usersService.findOneByUsername(username);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map