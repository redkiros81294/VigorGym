"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const chapa_client_module_1 = require("./chapa-client.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(chapa_client_module_1.ChapaClientModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map