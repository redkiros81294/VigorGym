
// src/auth/auth.service.ts
import { Injectable, BadRequestException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { User } from '../users/interfaces/user.interface';

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

    const newUser: User = {
      username,
      password: hashedPassword,
      email,
      firstName,
      lastName,
      roles: ['user'], 
    };

    const user = await this.usersService.create(newUser);

    return { status: 201, message: 'User created successfully', user };
  }

  async login(email: string, password: string) {
    const user = await this.usersService.findOneByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      const payload: JwtPayload = {
        sub: user.username, email: user.email,
        username: ''
      }; // Using JwtPayload with email
      const token = this.jwtService.sign(payload);
      return { accessToken: token };
    }
    return null;
  }

  async validateUser(username: string): Promise<User | null> {
    return this.usersService.findOneByUsername(username);
  }
}

