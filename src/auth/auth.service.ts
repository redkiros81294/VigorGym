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

// src/auth/auth.service.ts
import { Injectable, BadRequestException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  private validatePassword(password: string): void {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
      throw new BadRequestException('Password must be at least 8 characters long');
    }
    if (!hasUpperCase) {
      throw new BadRequestException('Password must contain at least one uppercase letter');
    }
    if (!hasLowerCase) {
      throw new BadRequestException('Password must contain at least one lowercase letter');
    }
    if (!hasNumber) {
      throw new BadRequestException('Password must contain at least one number');
    }
    if (!hasSpecialChar) {
      throw new BadRequestException('Password must contain at least one special character');
    }
  }

  async signUp(username: string, password: string, email: string, firstName: string, lastName: string) {
    this.validatePassword(password);

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.usersService.create({
      username,
      password: hashedPassword,
      email,
      firstName,
      lastName,
    });
    return { status: 201, message: 'User created successfully', user };
  }

  async login(email: string, password: string) {
    const user = await this.usersService.findOneByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      const payload = { sub: user.id, email: user.email };
      const token = this.jwtService.sign(payload);
      return { accessToken: token };
    }
    return null;
  }
}


