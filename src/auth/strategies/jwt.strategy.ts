// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { JwtPayload } from './jwt-payload.interface';
// import { UsersService } from '../../users/users.service'; // Adjust the path as per your project structure


// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor(private readonly usersService: UsersService) {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       secretOrKey: 'yourSecretKey', // Replace with actual secret key
//     });
//   }

//   async validate(payload: JwtPayload) {
//     const user = await this.usersService.findOneById(payload.sub); // Adjust according to your logic
//     if (!user) {
//       throw new UnauthorizedException();
//     }
//     return user;
//   }
// }

// src/auth/strategies/jwt.strategy.ts
import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { User } from '../../users/interfaces/user.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: (req) => req.cookies['jwt'] || req.headers.authorization?.split(' ')[1],
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




