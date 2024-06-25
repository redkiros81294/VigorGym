import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import { UsersService } from './src/users/users.service';
import * as bcrypt from 'bcrypt';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const usersService = app.get(UsersService);

  const username = 'aait';
  const email = '19re1kiros2d94@gmail.com';
  const password = '12345Ab.';
  const firstName = 'yebs';
  const lastName = 'vigor';
  const roles = ['admin'];

  const hashedPassword = await bcrypt.hash(password, 10);

  const adminUser = {
    username,
    email,
    password: hashedPassword,
    firstName,
    lastName,
    roles,
  };

  await usersService.create(adminUser);

  await app.close();
}

bootstrap();
