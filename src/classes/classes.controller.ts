// import { Controller, Res, Get, Post, Put, Delete, Body, Param, UseGuards, Query } from '@nestjs/common';
// import { ClassService } from './classes.service';
// import { CreateClassDto } from './dto/create-class.dto';
// import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
// import { ChapaService } from '../chapa-sdk/chapa.service'; 
// import { join } from 'path';
// import { Response } from 'express';

// @Controller('classes')
// export class ClassController {
//   constructor(private readonly classService: ClassService, private readonly chapaService: ChapaService) {}

//   @UseGuards(JwtAuthGuard)
//   @Post()
//   create(@Body() createClassDto: CreateClassDto) {
//     return this.classService.create(createClassDto);
//   }

//   @Get()
//   findAll() {
//     return this.classService.findAll();
//   }

//   @UseGuards(JwtAuthGuard)
//   @Put(':id')
//   update(@Param('id') id: string, @Body() createClassDto: CreateClassDto) {
//     return this.classService.update(id, createClassDto);
//   }

//   @UseGuards(JwtAuthGuard)
//   @Delete(':id')
//   delete(@Param('id') id: string) {
//     return this.classService.delete(id);
//   }

 
//   @Post(':id/payment')
//   async payForClass(@Param('id') classId: string, @Body() body: any) {
//     const response = await this.chapaService.initialize({
//       amount: body.amount,
//       currency: body.currency,
//       email: body.email,
//       first_name: body.first_name,
//       last_name: body.last_name,
//       tx_ref: `class-${classId}-${Date.now()}`,
//       callback_url: `http://yourdomain.com/class/${classId}/payment/callback`,
//       return_url: `http://yourdomain.com/class/${classId}/payment/return`,
//     });
//     return response;
//   }

//   @Get(':id/payment/callback')
//   async paymentCallback(@Param('id') classId: string, @Query('tx_ref') txRef: string) {
//     const paymentStatus = await this.chapaService.verify({ tx_ref: txRef });
//     if (paymentStatus.status === 'success') {
//       // Update class status, etc.
//     }
//     return paymentStatus;
//   }

//   @Get(':id/payment/return')
//   async paymentReturn(@Param('id') classId: string, @Query('tx_ref') txRef: string) {
//     const paymentStatus = await this.chapaService.verify({ tx_ref: txRef });
//     if (paymentStatus.status === 'success') {
//       // Update class status, etc.
//     }
//     return paymentStatus;
//   }
//   @Get()
//   getClassesPage(@Res() res: Response) {
//     res.sendFile(join(__dirname, '..', '..', 'public', 'classes.html'));
//   }
// }


// class.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Query, Res } from '@nestjs/common';
import { ClassService } from './classes.service';
import { CreateClassDto } from './dto/create-class.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { join } from 'path';
import { Response } from 'express';

@Controller('classes')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ClassController {
  constructor(private readonly classService: ClassService) {}

  @Roles('admin')
  @Post()
  create(@Body() createClassDto: CreateClassDto) {
    return this.classService.create(createClassDto);
  }

  @Get()
  findAll() {
    return this.classService.findAll();
  }

  @Roles('admin')
  @Put(':id')
  update(@Param('id') id: string, @Body() createClassDto: CreateClassDto) {
    return this.classService.update(id, createClassDto);
  }

  @Roles('admin')
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.classService.delete(id);
  }
  @Get("class")
  getBlogPage(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', '..', 'public', 'classes.html'));
  }
}
