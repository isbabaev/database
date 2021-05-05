import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.RABBITMQ_URL],
      queue: process.env.QUEUE_NAME,
      queueOptions: {
        durable: false
      },
    },
  });
  app.useGlobalPipes(new ValidationPipe());
  app.listen(() => console.log('Microservice is listening'));
}
bootstrap();
