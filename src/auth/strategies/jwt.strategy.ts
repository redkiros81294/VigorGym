
// src/auth/strategies/jwt.strategy.ts
import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { User } from '../../users/interfaces/user.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(JwtStrategy.name);

  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: (req) => {
        const jwtFromCookie = req.cookies?.jwt;
        const authorizationHeader = req.headers.authorization;
        const jwtFromHeader = authorizationHeader?.startsWith('Bearer ') ? authorizationHeader.split(' ')[1] : null;

        this.logger.debug(`Request cookies: ${JSON.stringify(req.cookies)}`);
        this.logger.debug(`Authorization header: ${authorizationHeader}`);

        if (!jwtFromCookie && !jwtFromHeader) {
          this.logger.error('JWT not found in cookies or authorization header');
        }

        return jwtFromCookie || jwtFromHeader;
      },
      secretOrKey: process.env.JWT_SECRET || 'vigorjared',
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    const user = await this.authService.validateUser(payload.sub);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
