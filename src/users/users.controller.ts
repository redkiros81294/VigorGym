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


import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
}
