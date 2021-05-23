import { ConfigService } from '@nestjs/config';
import { ClientOptions } from '@nestjs/microservices/interfaces/client-metadata.interface';
import { Transport } from '@nestjs/microservices';

export const appConnectionOptionsFactory = (configService: ConfigService): ClientOptions => ({
  transport: Transport.RMQ,
  options: {
    urls: [configService.get<string>('RABBITMQ_URI')],
    queue: configService.get('QUEUE_NAME'),
    queueOptions: {
      durable: false
    },
  }
});
