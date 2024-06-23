"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChapaClientModule = void 0;
const common_1 = require("@nestjs/common");
const chapa_client_controller_1 = require("./chapa-client.controller");
const chapa_module_1 = require("../chapa-sdk/chapa.module");
let ChapaClientModule = class ChapaClientModule {
};
exports.ChapaClientModule = ChapaClientModule;
exports.ChapaClientModule = ChapaClientModule = __decorate([
    (0, common_1.Module)({
        controllers: [chapa_client_controller_1.ChapaClientController],
        imports: [
            chapa_module_1.ChapaModule.register({
                secretKey: 'CHAPUBK_TEST-kgwii0waGksr2iAVqk10sBPErqICvYmn',
            }),
        ],
    })
], ChapaClientModule);
//# sourceMappingURL=chapa-client.module.js.map