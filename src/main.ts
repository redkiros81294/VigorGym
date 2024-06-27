// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { join } from 'path';
// import { NestExpressApplication } from '@nestjs/platform-express';

// async function bootstrap() {
//   const app = await NestFactory.create<NestExpressApplication>(AppModule);
//   app.useStaticAssets(join(__dirname, '..', 'public'));
//   app.setBaseViewsDir(join(__dirname, '..', 'views'));
//   app.setViewEngine('hbs');
//   await app.listen(3000);
// }
// bootstrap();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NotFoundFilter } from './not-found.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const staticAssetsPath = join(__dirname, '..', 'public');
  console.log('Static Assets Path:', staticAssetsPath);
  
  app.useStaticAssets(staticAssetsPath);
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.useGlobalFilters(new NotFoundFilter());
  app.setViewEngine('hbs');
  await app.listen(5000);
}
bootstrap();
