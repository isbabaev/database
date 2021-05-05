import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
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
    /*return request(app.getHttpServer())
      .post('')
      .send({
        firstName: 'Test',
        lastName: 'Test',
        email: 'test@mail.com',
        password: 'test',
      } as CreateAccountDto)
      .then((response) => {
        const body = response.body as CreateAccountResult;
        expect(typeof body.id).toBe('number');
        done();
      });*/

    const res = await client.send('hello', {msg: 'hello!'}).toPromise();

    expect(res).toBeDefined();

    /*const response = await client.send({ 'cmd': 'create' }, {
      firstName: 'Test',
      lastName: 'Test',
      email: 'test@mail.com',
      password: 'test',
    }).toPromise();

    console.log(response);*/
  });
});
