"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrollmentModel = exports.EnrollmentSchema = void 0;
const mongoose_1 = require("mongoose");
exports.EnrollmentSchema = new mongoose_1.Schema({
    companyName: { type: String, required: true },
    companyEmail: { type: String, required: true },
    planType: { type: String, required: true },
    numberOfEmployees: { type: Number, required: true },
    totalAmount: { type: Number, required: true },
    companyCode: { type: String, required: true, unique: true },
    employeesRemaining: { type: Number, required: true },
});
exports.EnrollmentModel = (0, mongoose_1.model)('Enrollment', exports.EnrollmentSchema);
//# sourceMappingURL=enrollment.schema.js.map