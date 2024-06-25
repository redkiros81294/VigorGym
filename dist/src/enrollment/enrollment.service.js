"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrollmentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const crypto = require("crypto");
let EnrollmentService = class EnrollmentService {
    constructor(enrollmentModel) {
        this.enrollmentModel = enrollmentModel;
    }
    async createEnrollment(createEnrollmentDto) {
        const companyCode = crypto.randomBytes(5).toString('hex');
        const createdEnrollment = new this.enrollmentModel({
            ...createEnrollmentDto,
            companyCode,
            employeesRemaining: createEnrollmentDto.numberOfEmployees
        });
        return createdEnrollment.save();
    }
    async validateCompanyCode(companyCode) {
        return this.enrollmentModel.findOne({ companyCode }).exec();
    }
    async decrementEmployeeCount(companyCode) {
        await this.enrollmentModel.updateOne({ companyCode }, { $inc: { employeesRemaining: -1 } }).exec();
    }
};
exports.EnrollmentService = EnrollmentService;
exports.EnrollmentService = EnrollmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Enrollment')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EnrollmentService);
//# sourceMappingURL=enrollment.service.js.map