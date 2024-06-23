// import { Controller, Post, Body, Get, Query } from '@nestjs/common';
// import { PaymentService } from './payment.service';

// @Controller('payment')
// export class PaymentController {
//   constructor(private readonly paymentService: PaymentService) {}

//   @Post()
//   async processPayment(@Body() paymentDto: { amount: number, type: string, userId: string }) {
//     return await this.paymentService.processPayment(paymentDto);
//   }

//   @Get('verify')
//   async verifyPayment(@Query('tx_ref') txRef: string, @Query('user_id') userId: string) {
//     return await this.paymentService.verifyPayment(txRef, userId);
//   }
// }


// payment.controller.ts
import { Controller, Post, Body, Get, Query, Req } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Request } from 'express';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async processPayment(@Body() paymentDto: { amount: number, type: string }, @Req() req: Request) {
    const user = req.user as any; // Assuming the user is attached to the request object
    return await this.paymentService.processPayment({ ...paymentDto, username: user.username });
  }

  @UseGuards(JwtAuthGuard)
  @Get('verify')
  async verifyPayment(@Query('tx_ref') txRef: string, @Req() req: Request) {
    const user = req.user as any; // Assuming the user is attached to the request object
    return await this.paymentService.verifyPayment(txRef, user.username);
  }
}

