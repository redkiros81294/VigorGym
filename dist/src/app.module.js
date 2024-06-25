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
const config_1 = require("@nestjs/config");
const auth_module_1 = require("./auth/auth.module");
const blog_module_1 = require("./blog/blog.module");
const classes_module_1 = require("./classes/classes.module");
const membership_module_1 = require("./membership/membership.module");
const users_module_1 = require("./users/users.module");
const chapa_nestjs_1 = require("chapa-nestjs");
const chapa_client_module_1 = require("./chapa-client/chapa-client.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const payment_module_1 = require("./payment/payment.module");
const enrollment_module_1 = require("./enrollment/enrollment.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            chapa_nestjs_1.ChapaModule.register({
                secretKey: 'CHAPUBK_TEST-kgwii0waGksr2iAVqk10sBPErqICvYmn',
            }),
            mongoose_1.MongooseModule.forRoot('mongodb://localhost/vigor-gym'),
            users_module_1.UsersModule,
            auth_module_1.AuthModule,
            blog_module_1.BlogModule,
            classes_module_1.ClassModule,
            membership_module_1.MembershipModule,
            chapa_client_module_1.ChapaClientModule,
            payment_module_1.PaymentModule,
            enrollment_module_1.EnrollmentModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map