"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateVerifyOptions = void 0;
const yup = require("yup");
const validateVerifyOptions = async (verifyOptions) => {
    const schema = yup.object().shape({
        tx_ref: yup.string().required(),
    });
    return await schema.validate(verifyOptions);
};
exports.validateVerifyOptions = validateVerifyOptions;
//# sourceMappingURL=verify.validation.js.map