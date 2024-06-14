import { AuthService } from './auth.service';
import { Response } from 'express';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    getLoginPage(res: Response): void;
    signUp(body: any, res: Response): Promise<any>;
    login(body: any, res: Response): Promise<any>;
}
