import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { BlogModule } from './blog/blog.module';
import { ClassModule } from './classes/classes.module'; // Ensure this path is correct
import { MembershipModule } from './membership/membership.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    AuthModule,
    BlogModule,
    ClassModule,
    MembershipModule,
    UsersModule,
  ],
})
export class AppModule {}
