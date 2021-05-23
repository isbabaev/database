import { Repository } from 'typeorm';
import { AccountEntity } from '../../entities/account.entity';
import { LoadAccountByEmailService } from '../load-account-by-email.service';
import { anything, instance, mock, verify, when } from 'ts-mockito';

describe('LoadAccountByEmailServiceTest', () => {
  let loadAccountByEmailService: LoadAccountByEmailService;
  let accountRepository: Repository<AccountEntity>;

  beforeAll(async () => {
    accountRepository = mock<Repository<AccountEntity>>();
    loadAccountByEmailService = new LoadAccountByEmailService(instance(accountRepository));
  });

  test('should call method findOne of accountRepository', async () => {
    const email = 'test@mail.com';

    await loadAccountByEmailService.loadAccount(email);

    verify(accountRepository.findOne({email}));
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
    when(accountRepository.findOne(anything())).thenResolve(newAccount);

    const account = await loadAccountByEmailService.loadAccount('');

    expect(account).toEqual(newAccount);
  });

  test('should return null when method findOne of accountRepository returns undefined', async () => {
    when(accountRepository.findOne(anything())).thenResolve(undefined);

    const account = await loadAccountByEmailService.loadAccount('');

    expect(account).toBeNull();
  });
})
