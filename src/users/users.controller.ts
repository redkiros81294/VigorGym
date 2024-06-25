
// import { Controller, Post, Body, UseGuards, Get, Param, Patch, Req, Res, HttpStatus } from '@nestjs/common';
// import { UsersService } from './users.service';
// import { UserDto } from './dto/user.dto';
// import { UserDocument } from './schemas/user.schema';
// import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
// import { Request, Response } from 'express';

// @Controller('users')
// export class UsersController {
//   constructor(private readonly usersService: UsersService) {}

//   @Post()
//   async createUser(@Body() userDto: UserDto): Promise<UserDocument> {
//     return this.usersService.createUser(userDto);
//   }

//   @UseGuards(JwtAuthGuard)
//   @Get()
//   async getAllUsers() {
//     return this.usersService.findAll();
//   }

//   @UseGuards(JwtAuthGuard)
//   @Get(':id')
//   async getUserById(@Param('id') id: string): Promise<UserDocument | null> {
//     return this.usersService.findOneById(id);
//   }

//   @UseGuards(JwtAuthGuard)
//   @Patch(':id')
//   async updateUserProfile(@Param('id') id: string, @Body() updatedUser: Partial<UserDto>): Promise<UserDocument | null> {
//     return this.usersService.updateUser(id, updatedUser);
//   }

//   @UseGuards(JwtAuthGuard)
//   @Get('profile')
//   async getProfile(@Req() req: Request, @Res() res: Response) {
//     try {
//       const user = await this.usersService.findOneByUsername(req.user['username']); // Using req.user.username from JWT token
//       if (!user) {
//         return res.status(HttpStatus.NOT_FOUND).json({ message: 'User not found' });
//       }
//       return res.status(HttpStatus.OK).json(user);
//     } catch (error) {
//       return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Failed to fetch user profile' });
//     }
//   }
// }

// src/users/users.controller.ts
import { Controller, Post, Body, UseGuards, Get, Param, Patch, Req, Res, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { UserDocument } from './schemas/user.schema';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post()
  // async createUser(@Body() userDto: UserDto): Promise<UserDocument> {
  //   return this.usersService.createUser(userDto);
  // }

  @Post()
  async createUser(@Body() userDto: UserDto): Promise<UserDocument> {
    return this.usersService.create(userDto); // Make sure this calls the 'create' method
  }
  
  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllUsers() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<UserDocument | null> {
    return this.usersService.findOneById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async updateUserProfile(@Param('id') id: string, @Body() updatedUser: Partial<UserDto>): Promise<UserDocument | null> {
    return this.usersService.updateUser(id, updatedUser);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Req() req: Request, @Res() res: Response) {
    try {
      const user = await this.usersService.findOneByUsername(req.user['username']); // Using req.user.username from JWT token
      if (!user) {
        return res.status(HttpStatus.NOT_FOUND).json({ message: 'User not found' });
      }
      return res.status(HttpStatus.OK).json(user);
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Failed to fetch user profile' });
    }
  }
  // @UseGuards(JwtAuthGuard)
  // @Get('profile')
  // async getProfile(@Req() req: any, @Res() res: Response) {
  //   try {
  //     const user = await this.usersService.findOneByUsername(req.user.username); // Using req.user.username from JWT token
  //     if (!user) {
  //       return res.status(HttpStatus.NOT_FOUND).json({ message: 'User not found' });
  //     }
  //     return res.status(HttpStatus.OK).json(user);
  //   } catch (error) {
  //     console.error('Failed to fetch user profile:', error); // Debugging statement
  //     return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'Failed to fetch user profile' });
  //   }
  // }

}
