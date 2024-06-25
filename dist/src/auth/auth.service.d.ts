import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/interfaces/user.interface';
import { EnrollmentService } from '../enrollment/enrollment.service';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    private readonly enrollmentService;
    constructor(usersService: UsersService, jwtService: JwtService, enrollmentService: EnrollmentService);
    private validatePassword;
    signUp(username: string, password: string, email: string, firstName: string, lastName: string, companyCode?: string): Promise<{
        status: number;
        message: string;
        user: import("../users/schemas/user.schema").UserDocument;
    }>;
    login(email: string, password: string): Promise<{
        accessToken: string;
        redirectUrl: string;
    }>;
    validateUser(username: string): Promise<User | null>;
}
