import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getLoginPage(res: Response): void;
    login(loginDto: LoginDto): Promise<{
        access_token: string;
    }>;
}
