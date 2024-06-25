
// import { Controller, Post, Body, Get, Res, HttpStatus } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { Response } from 'express';
// import { join } from 'path';

// @Controller('auth')
// export class AuthController {
//   constructor(private authService: AuthService) {}

//   @Get('login')
//   getLoginPage(@Res() res: Response) {
//     res.sendFile(join(__dirname, '..', '..', 'public', 'login.html'));
//   }

//   @Post('signup')
//   async signUp(@Body() body, @Res() res: Response): Promise<any> {
//     const { username, email, password, confirmPassword, firstName, lastName } = body;
//     if (password !== confirmPassword) {
//       return res.status(HttpStatus.BAD_REQUEST).json({ message: 'Passwords do not match' });
//     }
//     const result = await this.authService.signUp(username, password, email, firstName, lastName);
//     if (result.status === HttpStatus.CREATED) {
//       return res.redirect(join(__dirname, '..', '..', 'public', 'login.html')); // Redirect to login page
//     } else {
//       return res.status(result.status).json({ message: result.message });
//     }
//   }

//   @Post('login')
//   async login(@Body() body, @Res() res: Response): Promise<any> {
//     const { email, password } = body;
//     const isValid = await this.authService.login(email, password);
//     if (isValid) {
//       return res.redirect(join(__dirname, '..', '..', 'public', 'index.html')); // Redirect to home page
//     }
//     return res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Invalid credentials' });
//   }
// }
// src/auth/auth.controller.ts
import { Controller, Post, Body, Get, Res, HttpStatus, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { join } from 'path';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from '../users/users.service';

interface AuthenticatedRequest extends Request {
  user: {
    id: string;
  };
}


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService,
    private readonly usersService: UsersService
  ) {}

  @Get('login')
  getLoginPage(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', '..', 'public', 'login.html'));
  }

  @Post('signup')
  async signUp(@Body() body, @Res() res: Response): Promise<any> {
    const { username, email, password, confirmPassword, firstName, lastName } = body;
    if (password !== confirmPassword) {
      return res.status(HttpStatus.BAD_REQUEST).json({ message: 'Passwords do not match' });
    }
    const result = await this.authService.signUp(username, password, email, firstName, lastName);
    if (result.status === HttpStatus.CREATED) {
      return res.status(HttpStatus.CREATED).json({ message: 'User created successfully' });
    } else {
      return res.status(result.status).json({ message: result.message });
    }
  }

  // @Post('login')
  // async login(@Body() body, @Res() res: Response): Promise<any> {
  //   const { email, password } = body;
  //   const result = await this.authService.login(email, password);
  //   if (result) {
  //     res.cookie('jwt', result.accessToken, { httpOnly: true });
  //     return res.status(HttpStatus.OK).json({ redirectUrl: '/index.html' });
  //   }
  //   return res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Invalid credentials' });
  // }

  @Post('login')
  async login(@Body() body, @Res() res: Response): Promise<any> {
    const { email, password } = body;
    const result = await this.authService.login(email, password);
    if (result) {
      res.cookie('jwt', result.accessToken, { httpOnly: true });
      // Check user roles to redirect appropriately
      const user = await this.usersService.findOneByEmail(email);
      if (user && user.roles.includes('admin')) {
        return res.status(HttpStatus.OK).json({ redirectUrl: '/admins.html' });
      } else {
        return res.status(HttpStatus.OK).json({ redirectUrl: '/index.html' });
      }
    }
    return res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Invalid credentials' });
  }
  

  @UseGuards(AuthGuard('jwt'))
  @Get('user')
  async getUser(@Req() req: AuthenticatedRequest) {
    const user = await this.usersService.findOneById(req.user.id);
    if (user) {
      return { id: user._id, email: user.email, username: user.username, roles: user.roles };
    }
    return null;
  }
}
