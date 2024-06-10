"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInitializeOptions = void 0;
const yup = require("yup");
const validateInitializeOptions = async (initializeOptions) => {
    const schema = yup.object().shape({
        first_name: yup.string().required(),
        last_name: yup.string().required(),
        email: yup.string().email(),
        currency: yup.string().required(),
        amount: yup.string().required(),
        tx_ref: yup.string().required(),
        callback_url: yup.string().url().optional(),
        return_url: yup.string().url().optional(),
        customization: yup
            .object()
            .shape({
            title: yup.string().optional(),
            description: yup.string().optional(),
            logo: yup.string().optional(),
        })
            .optional(),
        subaccounts: yup
            .array()
            .of(yup.object().shape({
            id: yup.string().required(),
            split_type: yup.string().optional(),
            transaction_charge: yup.string().optional(),
        }))
            .nullable()
            .optional(),
    });
    return await schema.validate(initializeOptions);
};
exports.validateInitializeOptions = validateInitializeOptions;
//# sourceMappingURL=initialize.validation.js.map