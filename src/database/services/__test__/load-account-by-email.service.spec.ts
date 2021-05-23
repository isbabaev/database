import { Test } from '@nestjs/testing';
import { DatabaseModule } from '../../database.module';
import { getConnection, getRepository, Repository } from 'typeorm';
import { AccountEntity } from '../../entities/account.entity';
import { LoadAccountByEmailService } from '../load-account-by-email.service';

describe('LoadAccountByEmailServiceTest', () => {
  let loadAccountByEmailService: LoadAccountByEmailService;
  let accountRepository: Repository<AccountEntity>;

  beforeAll(async () => {
    await Test.createTestingModule({
      imports: [DatabaseModule],
    }).compile();

    accountRepository = getRepository(AccountEntity);
    loadAccountByEmailService = new LoadAccountByEmailService(accountRepository);
  });

  beforeEach(async () => {
    await accountRepository.delete({});
  });

  afterAll(async () => {
    await accountRepository.delete({});
    await getConnection().close();
  });

  test('should return account', async () => {
    const newAccount = new AccountEntity(
      '123',
      'Test',
      'Test',
      'test@mail.com',
      'password',
      new Date('2021-05-22'),
      new Date('2021-05-22')
    );
    await accountRepository.insert(newAccount);

    const account = await loadAccountByEmailService.loadAccount(newAccount.email);

    expect(account).toEqual(newAccount);
  });
})
