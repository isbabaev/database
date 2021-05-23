import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { appConnectionOptionsFactory } from './app-connection-options.factory';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(ConfigModule.forRoot());
  const configService = appContext.get(ConfigService);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    appConnectionOptionsFactory(configService)
  );
  app.useGlobalPipes(new ValidationPipe());
  app.listen(() => console.log('Microservice is listening'));
}
bootstrap();
