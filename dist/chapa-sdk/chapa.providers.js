"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createChapaProviders = void 0;
const constants_1 = require("./constants");
function createChapaProviders(options) {
    return [
        {
            provide: constants_1.CHAPA_OPTIONS,
            useValue: options,
        },
    ];
}
exports.createChapaProviders = createChapaProviders;
//# sourceMappingURL=chapa.providers.js.map