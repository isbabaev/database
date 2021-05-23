import { Repository } from 'typeorm';
import { AccountEntity } from '../../entities/account.entity';
import { CreateAccountService } from '../create-account.service';
import { capture, instance, mock } from 'ts-mockito';

describe('CreateAccountServiceTest', () => {
  let createAccountService: CreateAccountService;
  let accountRepository: Repository<AccountEntity>;

  beforeAll(async () => {
    accountRepository = mock<Repository<AccountEntity>>();
    createAccountService = new CreateAccountService(instance(accountRepository));
  });

  test('should call insert method of accountRepository', async () => {
    const account = new AccountEntity(
      '123',
      'Test',
      'Test',
      'test@mail.com',
      'password',
      new Date('2021-05-22'),
      new Date('2021-05-22')
    );

    await createAccountService.createAccount(account);

    const createAccountArguments = capture(accountRepository.insert).first();
    expect(createAccountArguments[0]).toEqual(account);
  });
});
