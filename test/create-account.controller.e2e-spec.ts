import { ClientProxy, ClientProxyFactory } from '@nestjs/microservices';
import { Test } from '@nestjs/testing';
import { appConnectionOptionsFactory } from '../src/app-connection-options.factory';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { INestMicroservice, ValidationPipe } from '@nestjs/common';
import { getRepository, Repository } from 'typeorm';
import { AccountEntity } from '../src/database/entities/account.entity';
import { CreateAccountDto } from '../src/api/dto/create-account.dto';
import { ApiModule } from '../src/api/api.module';

describe('CreateAccountControllerE2eTest', () => {
  let clientProxy: ClientProxy;
  let accountRepository: Repository<AccountEntity>;
  let app: INestMicroservice;

  beforeAll(async () => {
    const DatabaseClientProxySymbol = Symbol('DatabaseClientProxySymbol');
    const moduleRef = await Test.createTestingModule({
      imports: [ApiModule, ConfigModule.forRoot()],
      providers: [
        {
          provide: DatabaseClientProxySymbol,
          useFactory: (configService: ConfigService) =>
            ClientProxyFactory.create(appConnectionOptionsFactory(configService)),
          inject: [ConfigService],
        },
      ],
    }).compile();

    const configService = moduleRef.get(ConfigService);
    app = moduleRef.createNestMicroservice(appConnectionOptionsFactory(configService));
    app.useGlobalPipes(new ValidationPipe());
    await app.listenAsync();

    accountRepository = getRepository(AccountEntity);
    clientProxy = moduleRef.get(DatabaseClientProxySymbol);
  });

  beforeEach(async () => {
    await accountRepository.delete({});
  });

  afterAll(async () => {
    await accountRepository.delete({});
    await app.close();
  });

  test('should create account', async () => {
    const createAccountData = new CreateAccountDto(
      '123',
      'Test',
      'Test',
      'test@mail.com',
      'password',
      new Date('2021-05-22'),
      new Date('2021-05-22'),
    );

    await clientProxy.send('create-account', createAccountData).toPromise();

    const account = await accountRepository.findOne(createAccountData.id);
    expect(account).toEqual(createAccountData);
  });
});
