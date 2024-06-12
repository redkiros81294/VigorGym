// import { Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import * as bcrypt from 'bcryptjs';

// @Injectable()
// export class AuthService {
//   constructor(private readonly jwtService: JwtService) {}

//   async validateAdmin(username: string, password: string): Promise<boolean> {
//     const adminUsername = process.env.ADMIN_USERNAME;
//     const adminPassword = process.env.ADMIN_PASSWORD;
//     return username === adminUsername && await bcrypt.compare(password, adminPassword);
//   }

//   async login(username: string) {
//     const payload = { username };
//     return {
//       access_token: this.jwtService.sign(payload),
//     };
//   }
// }


import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService) {}

    async signUp(username: string, password: string, email: string, firstName: string, lastName: string): Promise<any> {
        const user = await this.userService.createUser(username, password, email, firstName, lastName);
        return { status: 201, message: 'User registered successfully' };
    }

    async login(username: string, password: string): Promise<boolean> {
        return this.userService.validateUser(username, password);
    }
}
