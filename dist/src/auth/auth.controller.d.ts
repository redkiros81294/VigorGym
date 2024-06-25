import { AuthService } from './auth.service';
import { Response } from 'express';
import { UsersService } from '../users/users.service';
interface AuthenticatedRequest extends Request {
    user: {
        id: string;
    };
}
export declare class AuthController {
    private authService;
    private readonly usersService;
    constructor(authService: AuthService, usersService: UsersService);
    getLoginPage(res: Response): void;
    signUp(body: any, res: Response): Promise<any>;
    login(body: any, res: Response): Promise<any>;
    getUser(req: AuthenticatedRequest): Promise<{
        id: unknown;
        email: string;
        username: string;
        roles: string[];
    }>;
}
export {};
