import { Strategy } from 'passport-jwt';
import { UsersService } from '../../users/users.service';
import { ConfigService } from '@nestjs/config';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userService;
    private readonly configService;
    constructor(userService: UsersService, configService: ConfigService);
    validate(payload: any): Promise<{
        userId: any;
        username: string;
    }>;
}
export {};
