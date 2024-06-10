import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Query } from '@nestjs/common';
import { ClassService } from './classes.service';
import { CreateClassDto } from './dto/create-class.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ChapaService } from '../chapa-sdk/chapa.service'; 

@Controller('classes')
export class ClassController {
  constructor(private readonly classService: ClassService, private readonly chapaService: ChapaService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createClassDto: CreateClassDto) {
    return this.classService.create(createClassDto);
  }

  @Get()
  findAll() {
    return this.classService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() createClassDto: CreateClassDto) {
    return this.classService.update(id, createClassDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.classService.delete(id);
  }

 
  @Post(':id/payment')
  async payForClass(@Param('id') classId: string, @Body() body: any) {
    const response = await this.chapaService.initialize({
      amount: body.amount,
      currency: body.currency,
      email: body.email,
      first_name: body.first_name,
      last_name: body.last_name,
      tx_ref: `class-${classId}-${Date.now()}`,
      callback_url: `http://yourdomain.com/class/${classId}/payment/callback`,
      return_url: `http://yourdomain.com/class/${classId}/payment/return`,
    });
    return response;
  }

  @Get(':id/payment/callback')
  async paymentCallback(@Param('id') classId: string, @Query('tx_ref') txRef: string) {
    const paymentStatus = await this.chapaService.verify({ tx_ref: txRef });
    if (paymentStatus.status === 'success') {
      // Update class status, etc.
    }
    return paymentStatus;
  }

  @Get(':id/payment/return')
  async paymentReturn(@Param('id') classId: string, @Query('tx_ref') txRef: string) {
    const paymentStatus = await this.chapaService.verify({ tx_ref: txRef });
    if (paymentStatus.status === 'success') {
      // Update class status, etc.
    }
    return paymentStatus;
  }
}
