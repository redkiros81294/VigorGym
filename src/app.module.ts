import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { ClassModule } from './classes/classes.module'; // Ensure this path is correct
import { MembershipModule } from './membership/membership.module';
import { UsersModule } from './users/users.module';
import { ChapaModule } from 'chapa-nestjs';
import { ChapaClientModule } from './chapa-client/chapa-client.module';

@Module({
  imports: [
    ChapaModule.register({
      secretKey: 'your-chapa-secret-key',
    }),
    MongooseModule.forRoot('mongodb://localhost/nest'),
    AuthModule,
    BlogModule,
    ClassModule,
    MembershipModule,
    UsersModule,
    ChapaClientModule
  ],
})
export class AppModule {}
