import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NotFoundFilter } from './not-found.filter';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new NotFoundFilter());


  const filePath = join(__dirname, '..', 'public', '404.html');
  console.log('404.html path:', filePath);
  
  await app.listen(3000);
}
bootstrap();
