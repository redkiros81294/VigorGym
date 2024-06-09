import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    validateAdmin(username: string, password: string): Promise<boolean>;
    login(username: string): Promise<{
        access_token: string;
    }>;
}
