

// import { Controller, Post, Body, Req, UseGuards, HttpException, HttpStatus, Get, Res } from '@nestjs/common';
// import { PaymentService } from './payment.service';
// import { EnrollmentService } from '../enrollment/enrollment.service'; // Import EnrollmentService
// import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
// import { Request, Response } from 'express';
// import { User } from '../users/interfaces/user.interface';
// import { join } from 'path';

// @Controller('payment')
// export class PaymentController {
//   constructor(
//     private readonly paymentService: PaymentService,
//     private readonly enrollmentService: EnrollmentService // Inject EnrollmentService
//   ) {}

//   @UseGuards(JwtAuthGuard)
//   @Post()
//   async processPayment(@Body() paymentDto: { amount: number; type: string; productName?: string; companyEmail?: string; planType?: string; numberOfEmployees?: number }, @Req() req: Request) {
//     const user = req.user as User;
//     console.log('PaymentController processPayment user:', user); // Debugging statement
//     if (!user || !user.email) {
//       throw new HttpException('User not authenticated', HttpStatus.UNAUTHORIZED);
//     }
//     const paymentResult = await this.paymentService.processPayment({ ...paymentDto, user });

//     if (paymentResult.success && paymentDto.type === 'enrollment') {
//       const createEnrollmentDto = {
//         companyName: paymentDto.productName,
//         companyEmail: paymentDto.companyEmail,
//         planType: paymentDto.planType,
//         numberOfEmployees: paymentDto.numberOfEmployees,
//         totalAmount: paymentDto.amount
//       };
//       const enrollment = await this.enrollmentService.createEnrollment(createEnrollmentDto);
//       return { success: true, companyCode: enrollment.companyCode };
//     }

//     return paymentResult;
//   }

//   @UseGuards(JwtAuthGuard)
//   @Post('verify')
//   async verifyPayment(@Body('txRef') txRef: string, @Req() req: Request) {
//     const user = req.user as User;
//     console.log('PaymentController verifyPayment user:', user); // Debugging statement
//     if (!user || !user.email) {
//       throw new HttpException('User not authenticated', HttpStatus.UNAUTHORIZED);
//     }
//     return await this.paymentService.verifyPayment(txRef, user);
//   }
//   @Get('payment')
//   getMembershipPage(@Res() res: Response) {
//     res.sendFile(join(__dirname, '..', '..', 'public', 'payment.html'));
//   }
// }
import { Controller, Post, Body, Req, UseGuards, HttpException, HttpStatus, Get, Res } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { EnrollmentService } from '../enrollment/enrollment.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Request, Response } from 'express';
import { User } from '../users/interfaces/user.interface';
import { join } from 'path';

@Controller('payment')
export class PaymentController {
  constructor(
    private readonly paymentService: PaymentService,
    private readonly enrollmentService: EnrollmentService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async processPayment(@Body() paymentDto: { amount: number; type: string; productName?: string; companyEmail?: string; planType?: string; numberOfEmployees?: number }, @Req() req: Request) {
    const user = req.user as User;
    console.log('PaymentController processPayment user:', user); // Debugging statement
    if (!user || !user.email) {
      throw new HttpException('User not authenticated', HttpStatus.UNAUTHORIZED);
    }
    const paymentResult = await this.paymentService.processPayment({ ...paymentDto, user });

    if (paymentResult.success && paymentDto.type === 'enrollment') {
      const createEnrollmentDto = {
        companyName: paymentDto.productName,
        companyEmail: paymentDto.companyEmail,
        planType: paymentDto.planType,
        numberOfEmployees: paymentDto.numberOfEmployees,
        totalAmount: paymentDto.amount
      };
      const enrollment = await this.enrollmentService.createEnrollment(createEnrollmentDto);
      return { success: true, companyCode: enrollment.companyCode };
    }

    return paymentResult;
  }

  @UseGuards(JwtAuthGuard)
  @Post('verify')
  async verifyPayment(@Body('txRef') txRef: string, @Req() req: Request) {
    const user = req.user as User;
    console.log('PaymentController verifyPayment user:', user); // Debugging statement
    if (!user || !user.email) {
      throw new HttpException('User not authenticated', HttpStatus.UNAUTHORIZED);
    }
    return await this.paymentService.verifyPayment(txRef, user);
  }

  @Get('payment')
  getMembershipPage(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', '..', 'public', 'payment.html'));
  }
}
