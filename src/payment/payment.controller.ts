// import { Controller, Post, Body, Req, UseGuards } from '@nestjs/common';
// import { PaymentService } from './payment.service';
// import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
// import { Request } from 'express';
// import { User } from '../users/interfaces/user.interface';

// @Controller('payment')
// export class PaymentController {
//   constructor(private readonly paymentService: PaymentService) {}

//   @UseGuards(JwtAuthGuard)
//   @Post()
//   async processPayment(@Body() paymentDto: { amount: number; type: string }, @Req() req: Request) {
//     const user = req.user as User;
//     console.log('PaymentController processPayment user:', user); // Debugging statement
//     if (!user || !user.username) {
//       throw new Error('User not found in request');
//     }
//     return await this.paymentService.processPayment({ ...paymentDto, username: user.username });
//   }

//   @UseGuards(JwtAuthGuard)
//   @Post('verify')
//   async verifyPayment(@Body('txRef') txRef: string, @Req() req: Request) {
//     const user = req.user as User;
//     console.log('PaymentController verifyPayment user:', user); // Debugging statement
//     if (!user || !user.username) {
//       throw new Error('User not found in request');
//     }
//     return await this.paymentService.verifyPayment(txRef, user.username);
//   }
// }


import { Controller, Post, Body, Req, UseGuards, HttpException, HttpStatus } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { EnrollmentService } from '../enrollment/enrollment.service'; // Import EnrollmentService
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Request } from 'express';
import { User } from '../users/interfaces/user.interface';

@Controller('payment')
export class PaymentController {
  constructor(
    private readonly paymentService: PaymentService,
    private readonly enrollmentService: EnrollmentService // Inject EnrollmentService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async processPayment(@Body() paymentDto: { amount: number; type: string; productName?: string; companyEmail?: string; planType?: string; numberOfEmployees?: number }, @Req() req: Request) {
    const user = req.user as User;
    console.log('PaymentController processPayment user:', user); // Debugging statement
    if (!user || !user.username) {
      throw new Error('User not found in request');
    }
    const paymentResult = await this.paymentService.processPayment({ ...paymentDto, username: user.username });

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
    if (!user || !user.username) {
      throw new Error('User not found in request');
    }
    return await this.paymentService.verifyPayment(txRef, user.username);
  }
}
