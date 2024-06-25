"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./src/app.module");
const users_service_1 = require("./src/users/users.service");
const bcrypt = require("bcrypt");
async function bootstrap() {
    const app = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const usersService = app.get(users_service_1.UsersService);
    const username = 'aait';
    const email = '19re1kiros2d94@gmail.com';
    const password = '12345Ab.';
    const firstName = 'yebs';
    const lastName = 'vigor';
    const roles = ['admin'];
    const hashedPassword = await bcrypt.hash(password, 10);
    const adminUser = {
        username,
        email,
        password: hashedPassword,
        firstName,
        lastName,
        roles,
    };
    await usersService.create(adminUser);
    await app.close();
}
bootstrap();
//# sourceMappingURL=create-admin-user.js.map