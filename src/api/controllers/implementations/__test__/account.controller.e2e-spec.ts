import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../../../app.module';
import { ClientProxy, ClientsModule, Transport } from '@nestjs/microservices';
require('dotenv').config();

describe('AccountControllerE2eTest', () => {
  let app: INestApplication;
  let client: ClientProxy;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [
        AppModule,
        ClientsModule.register([
          {
            name: 'DATABASE_SERVICE',
            transport: Transport.RMQ,
            options: {
              urls: [process.env.RABBITMQ_URL],
              queue: process.env.QUEUE_NAME,
              queueOptions: {
                durable: false,
              },
            },
          },
        ]),
      ],
    }).compile();

    app = moduleRef.createNestApplication();

    await app.init();

    client = app.get('DATABASE_SERVICE');
    await client.connect();
  });

  afterAll(async () => {
    await app.close();
    client.close();
  });

  it('should create account', async () => {
    await client.send('create-account', {
      firstName: 'Test',
      lastName: 'Test',
      email: 'test4@mail.com',
      password: 'test',
    }).toPromise();
  });
});
