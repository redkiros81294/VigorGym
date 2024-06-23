import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/interfaces/user.interface';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    private validatePassword;
    signUp(username: string, password: string, email: string, firstName: string, lastName: string): Promise<{
        status: number;
        message: string;
        user: User;
    }>;
    login(email: string, password: string): Promise<{
        accessToken: string;
    }>;
    validateUser(username: string): Promise<User | null>;
}
