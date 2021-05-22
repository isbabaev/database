import { Test } from '@nestjs/testing';
import { DatabaseModule } from '../../database.module';
import { getRepository, Repository } from 'typeorm';
import { AccountEntity } from '../../entities/account.entity';
import { CreateAccountService } from '../create-account.service';

describe('CreateAccountServiceTest', () => {
  let createAccountService: CreateAccountService;
  let accountRepository: Repository<AccountEntity>;

  beforeAll(async () => {
    await Test.createTestingModule({
      imports: [DatabaseModule],
    }).compile();

    accountRepository = getRepository(AccountEntity);
    createAccountService = new CreateAccountService(accountRepository);
  });

  beforeEach(() => {
    accountRepository.delete({});
  });

  afterAll(() => {
    accountRepository.delete({});
  });

  test('should create account', async () => {
    const newAccount = new AccountEntity(
      '123',
      'Test',
      'Test',
      'test@mail.com',
      'password',
      new Date('2021-05-22'),
      new Date('2021-05-22')
    );

    await createAccountService.createAccount(newAccount);

    const account = await accountRepository.findOne(newAccount.id);
    expect(account).toEqual(newAccount);
  });
});
