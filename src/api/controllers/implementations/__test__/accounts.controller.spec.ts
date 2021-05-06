import { AccountsController } from '../accounts.controller';
import { Test } from '@nestjs/testing';
import { ApiModule } from '../../../api.module';
import { AccountService } from '../../../../database/services/implementations/account.service';
import { AccountEntity } from '../../../../database/entities/account.entity';
import { IAccountServiceSymbol } from '../../../../database/services/definitions/account.service.interface';

describe('AccountsControllerTest', () => {
  let accountsController: AccountsController;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [ApiModule]
    }).compile();

    const accountsService = moduleRef.get<AccountService>(IAccountServiceSymbol);

    jest.spyOn(accountsService, 'create').mockImplementation(() => Promise.resolve({id: 1}));

    accountsController = new AccountsController(accountsService);
  });

  describe('createAccount', () => {
    it('should return id', async () => {
      const {id} = await accountsController.createAccount(new AccountEntity());

      expect(typeof id).toBe('number');
    });
  });
});
