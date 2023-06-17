import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const VERSION = 'v1';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/'+VERSION);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
  }));


  await app.listen(3000);
}
bootstrap();
