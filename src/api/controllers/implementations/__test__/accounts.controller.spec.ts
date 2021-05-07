import { AccountsController } from '../accounts.controller';
import { Test } from '@nestjs/testing';
import { ApiModule } from '../../../api.module';
import { AccountService } from '../../../../database/services/implementations/account.service';
import { AccountEntity } from '../../../../database/entities/account.entity';
import { IAccountServiceSymbol } from '../../../../database/services/definitions/account.service';

describe('AccountsControllerTest', () => {
  let accountsController: AccountsController;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ApiModule]
    }).compile();

    const accountsService = moduleRef.get<AccountService>(IAccountServiceSymbol);

    jest.spyOn(accountsService, 'create').mockImplementation(() => Promise.resolve({id: 1}));
    jest.spyOn(accountsService, 'findOneByEmail')
      .mockImplementation(() => Promise.resolve(new AccountEntity()));

    accountsController = new AccountsController(accountsService);
  });

  describe('createAccount', () => {
    it('should return id', async () => {
      const {id} = await accountsController.createAccount(new AccountEntity());

      expect(typeof id).toBe('number');
    });
  });

  describe('findAccountByEmail', () => {
    it('should return account', async () => {
      const account = await accountsController.findAccountByEmail('test@mail.com');

      expect(account).toBeInstanceOf(AccountEntity);
    });
  });
});
