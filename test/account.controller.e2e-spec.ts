import connection from './connection';
import { Test } from '@nestjs/testing';
import { ApiModule } from '../src/api/api.module';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { CreateAccountDto } from '../src/api/dto/account.dto';
import { CreateAccountResult } from '../src/database/interfaces/account.interface';
import { AppModule } from '../src/app.module';
import { getConnection } from 'typeorm';

describe('AccountControllerE2eTest', () => {
  let app: INestApplication;

  beforeAll(async () => {
    // const connection = getConnection();
    const moduleRef = await Test.createTestingModule({
      imports: [
        AppModule,
      ],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  beforeEach(async () => {
    // await connection.clear();
  });

  it('', () =>{});

  it('/POST', (done) => {
    return request(app.getHttpServer())
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
      })
  });
});
