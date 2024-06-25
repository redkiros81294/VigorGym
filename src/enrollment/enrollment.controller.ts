// import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
// import { EnrollmentService } from './enrollment.service';
// import { CreateEnrollmentDto } from './dto/create-enrollment.dto';

// @Controller('enroll')
// export class EnrollmentController {
//   constructor(private readonly enrollmentService: EnrollmentService) {}

//   @Post()
//   async create(@Body() createEnrollmentDto: CreateEnrollmentDto) {
//     const enrollment = await this.enrollmentService.createEnrollment(createEnrollmentDto);
//     return { success: true, companyCode: enrollment.companyCode };
//   }
// }

import { Controller, Post, Body, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { CreateEnrollmentDto } from './dto/create-enrollment.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'; // Correct path for JwtAuthGuard

@Controller('enroll')
export class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createEnrollmentDto: CreateEnrollmentDto) {
    const enrollment = await this.enrollmentService.createEnrollment(createEnrollmentDto);
    return { success: true, companyCode: enrollment.companyCode };
  }
}
