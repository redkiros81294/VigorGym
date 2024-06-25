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
import { PaymentModule } from './payment/payment.module';
import { EnrollmentModule } from './enrollment/enrollment.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ChapaModule.register({
      secretKey: 'CHAPUBK_TEST-kgwii0waGksr2iAVqk10sBPErqICvYmn',
    }),
    MongooseModule.forRoot('mongodb://localhost/vigor-gym'),
    UsersModule,
    AuthModule,
    BlogModule,
    ClassModule,
    MembershipModule,
    ChapaClientModule,
    PaymentModule,
    EnrollmentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
