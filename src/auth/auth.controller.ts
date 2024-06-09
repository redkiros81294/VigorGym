import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

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
