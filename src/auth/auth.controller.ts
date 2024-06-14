// import { Controller, Post, Body, UnauthorizedException, Get, Res } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { LoginDto } from './dto/login.dto';
// import { Response } from 'express';
// import { join } from 'path';

// @Controller('auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) { }

//   @Get('login')
//   getLoginPage(@Res() res: Response) {
//     res.sendFile(join(__dirname, '..', '..', 'public', 'login.html'));
//   }

//   @Post('login')
//   async login(@Body() loginDto: LoginDto) {
//     const { username, password } = loginDto;
//     const isValid = await this.authService.validateAdmin(username, password);
//     if (!isValid) {
//       throw new UnauthorizedException('Invalid credentials');
//     }
//     return this.authService.login(username);
//   }
// }
import { Controller, Post, Body, Get, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { join } from 'path';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

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
      return res.redirect(join(__dirname, '..', '..', 'public', 'login.html')); // Redirect to login page
    } else {
      return res.status(result.status).json({ message: result.message });
    }
  }

  @Post('login')
  async login(@Body() body, @Res() res: Response): Promise<any> {
    const { email, password } = body;
    const isValid = await this.authService.login(email, password);
    if (isValid) {
      return res.redirect(join(__dirname, '..', '..', 'public', 'index.html')); // Redirect to home page
    }
    return res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Invalid credentials' });
  }
}

