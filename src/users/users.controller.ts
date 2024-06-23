// import { Controller, Get, Res, UseGuards } from '@nestjs/common';
// import { UsersService } from './users.service';
// import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
// import { Response } from 'express';
// import { join } from 'path';

// @Controller('users')
// export class UsersController {
//   constructor(private readonly usersService: UsersService) {}

//   @Get('profile')
//   getUserProfilePage(@Res() res: Response) {
//     res.sendFile(join(__dirname, '..', '..', 'public', 'profile.html'));
//   }

//   @UseGuards(JwtAuthGuard)
//   @Get()
//   findAll() {
//     return this.usersService.findAll();
//   }
// }


import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { UserDocument } from './schemas/user.schema';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() userDto: UserDto): Promise<UserDocument> {
    return this.usersService.createUser(userDto);
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllUsers() {
    return this.usersService.findAll();
  }
}
