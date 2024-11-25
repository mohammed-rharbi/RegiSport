import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.enableCors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE','OPTIONS'], 
  });

  app.useGlobalPipes(new ValidationPipe());


  await app.listen(process.env.PORT ?? 3000);
  Logger.log(`this app is running at : http://localhost/${process.env.PORT ?? 3000}`,'Bootsrap')
}
bootstrap();
