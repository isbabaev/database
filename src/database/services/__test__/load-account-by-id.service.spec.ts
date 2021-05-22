import { getRepository, Repository } from 'typeorm';
import { AccountEntity } from '../../entities/account.entity';
import { Test } from '@nestjs/testing';
import { DatabaseModule } from '../../database.module';
import { LoadAccountByIdService } from '../load-account-by-id.service';

describe('LoadAccountByIdServiceTest', () => {
  let loadAccountByIdService: LoadAccountByIdService;
  let accountRepository: Repository<AccountEntity>;

  beforeAll(async () => {
    await Test.createTestingModule({
      imports: [DatabaseModule],
    }).compile();

    accountRepository = getRepository(AccountEntity);
    loadAccountByIdService = new LoadAccountByIdService(accountRepository);
  });

  beforeEach(() => {
    accountRepository.delete({});
  });

  afterAll(() => {
    accountRepository.delete({});
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

    const account = await loadAccountByIdService.loadAccount(newAccount.id);

    expect(account).toEqual(newAccount);
  });
});
