import { Controller, Post, Body, UnauthorizedException, Get, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';
import { join } from 'path';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Get('login')
  getLoginPage(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', '..', 'public', 'login.html'));
  }
  
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const { username, password } = loginDto;
    const isValid = await this.authService.validateAdmin(username, password);
    if (!isValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(username);
  }
}
