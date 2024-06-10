"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCreateSubaccountOptions = void 0;
const yup = require("yup");
const enums_1 = require("../enums");
const validateCreateSubaccountOptions = async (createSubaccountOptions) => {
    const schema = yup.object().shape({
        business_name: yup.string().required(),
        account_name: yup.string().required(),
        bank_code: yup.string().required(),
        account_number: yup.string().required(),
        split_type: yup.mixed().oneOf(Object.values(enums_1.SplitType)).required(),
        split_value: yup.number().required(),
    });
    return await schema.validate(createSubaccountOptions);
};
exports.validateCreateSubaccountOptions = validateCreateSubaccountOptions;
//# sourceMappingURL=create-subaccount.validation.js.map