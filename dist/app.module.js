"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const auth_module_1 = require("./auth/auth.module");
const blog_module_1 = require("./blog/blog.module");
const classes_module_1 = require("./classes/classes.module");
const membership_module_1 = require("./membership/membership.module");
const users_module_1 = require("./users/users.module");
const chapa_nestjs_1 = require("chapa-nestjs");
const chapa_client_module_1 = require("./chapa-client/chapa-client.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            chapa_nestjs_1.ChapaModule.register({
                secretKey: 'your-chapa-secret-key',
            }),
            mongoose_1.MongooseModule.forRoot('mongodb://localhost/nest'),
            auth_module_1.AuthModule,
            blog_module_1.BlogModule,
            classes_module_1.ClassModule,
            membership_module_1.MembershipModule,
            users_module_1.UsersModule,
            chapa_client_module_1.ChapaClientModule
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map