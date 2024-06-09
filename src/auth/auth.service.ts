import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateAdmin(username: string, password: string): Promise<boolean> {
    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;
    return username === adminUsername && await bcrypt.compare(password, adminPassword);
  }

  async login(username: string) {
    const payload = { username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
