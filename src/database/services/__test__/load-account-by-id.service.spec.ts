import { Repository } from 'typeorm';
import { AccountEntity } from '../../entities/account.entity';
import { LoadAccountByIdService } from '../load-account-by-id.service';
import { anything, instance, mock, verify, when } from 'ts-mockito';

describe('LoadAccountByIdServiceTest', () => {
  let loadAccountByIdService: LoadAccountByIdService;
  let accountRepository: Repository<AccountEntity>;

  beforeAll(async () => {
    accountRepository = mock<Repository<AccountEntity>>();
    loadAccountByIdService = new LoadAccountByIdService(instance(accountRepository));
  });

  test('should call method findOne of accountRepository', async () => {
    const id = '123';

    await loadAccountByIdService.loadAccount(id);

    verify(accountRepository.findOne({id}));
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

    const account = await loadAccountByIdService.loadAccount('');

    expect(account).toEqual(newAccount);
  });

  test('should return null when method findOne of accountRepository returns undefined', async () => {
    when(accountRepository.findOne(anything())).thenResolve(undefined);

    const account = await loadAccountByIdService.loadAccount('');

    expect(account).toBeNull();
  });
});
