import { Repository } from 'typeorm';
import { AccountEntity } from '../../entities/account.entity';
import { CreateAccountService } from '../create-account.service';
import { capture, instance, mock, verify } from 'ts-mockito';

describe('CreateAccountServiceTest', () => {
  let createAccountService: CreateAccountService;
  let accountRepository: Repository<AccountEntity>;

  beforeAll(async () => {
    accountRepository = mock<Repository<AccountEntity>>();
    createAccountService = new CreateAccountService(instance(accountRepository));
  });

  test('should call insert method of accountRepository', async () => {
    const account = mock(AccountEntity);

    await createAccountService.createAccount(account);

    verify(accountRepository.insert(account)).called();
  });
});
