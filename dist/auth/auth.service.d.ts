import { UsersService } from '../users/users.service';
export declare class AuthService {
    private userService;
    constructor(userService: UsersService);
    signUp(username: string, password: string, email: string, firstName: string, lastName: string): Promise<any>;
    login(username: string, password: string): Promise<boolean>;
}
