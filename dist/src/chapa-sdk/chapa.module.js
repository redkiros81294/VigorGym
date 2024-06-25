"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ChapaModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChapaModule = void 0;
const common_1 = require("@nestjs/common");
const chapa_service_1 = require("./chapa.service");
const constants_1 = require("./constants");
const chapa_providers_1 = require("./chapa.providers");
const axios_1 = require("@nestjs/axios");
let ChapaModule = ChapaModule_1 = class ChapaModule {
    static register(options) {
        return {
            module: ChapaModule_1,
            providers: (0, chapa_providers_1.createChapaProviders)(options),
        };
    }
    static registerAsync(options) {
        return {
            module: ChapaModule_1,
            providers: [
                ...this.createProviders(options),
            ],
        };
    }
    static createProviders(options) {
        if (options.useExisting || options.useFactory) {
            return [this.createOptionsProvider(options)];
        }
        return [
            this.createOptionsProvider(options),
            {
                provide: options.useClass,
                useClass: options.useClass,
            },
        ];
    }
    static createOptionsProvider(options) {
        if (options.useFactory) {
            return {
                provide: constants_1.CHAPA_OPTIONS,
                useFactory: options.useFactory,
                inject: options.inject || [],
            };
        }
        return {
            provide: constants_1.CHAPA_OPTIONS,
            useFactory: async (optionsFactory) => await optionsFactory.createChapaOptions(),
            inject: [options.useExisting || options.useClass],
        };
    }
};
exports.ChapaModule = ChapaModule;
exports.ChapaModule = ChapaModule = ChapaModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [axios_1.HttpModule],
        providers: [chapa_service_1.ChapaService],
        exports: [chapa_service_1.ChapaService],
    })
], ChapaModule);
//# sourceMappingURL=chapa.module.js.map