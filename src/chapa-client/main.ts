
import { NestFactory } from '@nestjs/core';
import { ChapaClientModule } from './chapa-client.module';

async function bootstrap() {
  const app = await NestFactory.create(ChapaClientModule);
  await app.listen(3000);
}
bootstrap();
