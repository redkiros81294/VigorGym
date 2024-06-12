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

import { Controller, Post, Body, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signup')
    async signUp(@Body() body, @Res() res: Response): Promise<any> {
        const { username, email, password, confirmPassword, firstName, lastName } = body;
        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }
        const result = await this.authService.signUp(username, password, email, firstName, lastName);
        return res.status(result.status).json({ message: result.message });
    }

    @Post('login')
    async login(@Body() body, @Res() res: Response): Promise<any> {
        const { username, password } = body;
        const isValid = await this.authService.login(username, password);
        if (isValid) {
            return res.status(200).json({ message: 'Login successful' });
        }
        return res.status(401).json({ message: 'Invalid credentials' });
    }
}
