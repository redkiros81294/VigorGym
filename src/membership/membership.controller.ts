import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Query } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ChapaService } from '../chapa-sdk/chapa.service';

@Controller('memberships')
export class MembershipController {
  constructor(private readonly membershipService: MembershipService,
              private readonly chapaService: ChapaService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createMembershipDto: CreateMembershipDto) {
    return this.membershipService.create(createMembershipDto);
  }

  @Get()
  findAll() {
    return this.membershipService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() createMembershipDto: CreateMembershipDto) {
    return this.membershipService.update(id, createMembershipDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.membershipService.delete(id);
  }
  
  @Post(':id/payment')
  async payForMembership(@Param('id') membershipId: string, @Body() body: any) {
    const response = await this.chapaService.initialize({
      amount: body.amount,
      currency: body.currency,
      email: body.email,
      first_name: body.first_name,
      last_name: body.last_name,
      tx_ref: `membership-${membershipId}-${Date.now()}`,
      callback_url: `http://yourdomain.com/membership/${membershipId}/payment/callback`,
      return_url: `http://yourdomain.com/membership/${membershipId}/payment/return`,
    });
    return response;
  }

  @Get(':id/payment/callback')
  async paymentCallback(@Param('id') membershipId: string, @Query('tx_ref') txRef: string) {
    const paymentStatus = await this.chapaService.verify({ tx_ref: txRef });
    if (paymentStatus.status === 'success') {
      // Update membership status, etc.
    }
    return paymentStatus;
  }

  @Get(':id/payment/return')
  async paymentReturn(@Param('id') membershipId: string, @Query('tx_ref') txRef: string) {
    const paymentStatus = await this.chapaService.verify({ tx_ref: txRef });
    if (paymentStatus.status === 'success') {
      // Update membership status, etc.
    }
    return paymentStatus;
  }

}
