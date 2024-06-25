"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentSchema = exports.PaymentModel = void 0;
const mongoose_1 = require("mongoose");
const PaymentSchema = new mongoose_1.Schema({
    amount: { type: Number, required: true },
    type: { type: String, required: true },
    status: { type: String, required: true },
    transactionReference: { type: String, required: true },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    createdAt: { type: Date, default: Date.now },
});
exports.PaymentSchema = PaymentSchema;
exports.PaymentModel = (0, mongoose_1.model)('Payment', PaymentSchema);
//# sourceMappingURL=payment.schema.js.map