import { ClientProxy, ClientProxyFactory } from '@nestjs/microservices';
import { getRepository, Repository } from 'typeorm';
import { AccountEntity } from '../src/database/entities/account.entity';
import { INestMicroservice, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { ApiModule } from '../src/api/api.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { appConnectionOptionsFactory } from '../src/app-connection-options.factory';

describe('LoadAccountByIdControllerE2eTest', () => {
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

  test('should return account', async () => {
    const newAccount = new AccountEntity(
      '123',
      'Test',
      'Test',
      'test@mail.com',
      'password',
      new Date('2021-05-22'),
      new Date('2021-05-22'),
    );
    await accountRepository.insert(newAccount);

    const account: AccountEntity = await clientProxy
      .send('load-account-by-email', { id: newAccount.id }).toPromise();
    const mappedAccount: AccountEntity = {
      ...account,
      createdAt: new Date(account.createdAt),
      updatedAt: new Date(account.updatedAt),
    };

    expect(mappedAccount).toEqual(newAccount);
  });
});
