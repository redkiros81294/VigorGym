import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Enrollment, EnrollmentDocument } from './schemas/enrollment.schema';
import * as crypto from 'crypto';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';

@Injectable()
export class EnrollmentService {
  constructor(
    @InjectModel('Enrollment') private readonly enrollmentModel: Model<EnrollmentDocument>,
  ) {}

  async createEnrollment(createEnrollmentDto: CreateEnrollmentDto): Promise<Enrollment> {
    const companyCode = crypto.randomBytes(5).toString('hex');
    const createdEnrollment = new this.enrollmentModel({
      ...createEnrollmentDto,
      companyCode,
      employeesRemaining: createEnrollmentDto.numberOfEmployees
    });
    return createdEnrollment.save();
  }

  async validateCompanyCode(companyCode: string): Promise<Enrollment | null> {
    return this.enrollmentModel.findOne({ companyCode }).exec();
  }

  async decrementEmployeeCount(companyCode: string): Promise<void> {
    await this.enrollmentModel.updateOne(
      { companyCode },
      { $inc: { employeesRemaining: -1 } }
    ).exec();
  }
}
