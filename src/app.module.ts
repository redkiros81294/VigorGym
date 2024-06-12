import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { ClassModule } from './classes/classes.module'; // Ensure this path is correct
import { MembershipModule } from './membership/membership.module';
import { UsersModule } from './users/users.module';
import { ChapaModule } from 'chapa-nestjs';
import { ChapaClientModule } from './chapa-client/chapa-client.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ChapaModule.register({
      secretKey: 'your-chapa-secret-key',
    }),
    MongooseModule.forRoot('mongodb://localhost/vigor-gym'),
    UsersModule,
    AuthModule,
    BlogModule,
    ClassModule,
    MembershipModule,
    ChapaClientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
