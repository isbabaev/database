import { AccountService } from '../account.service';
import { getRepository } from 'typeorm';
import { AccountEntity } from '../../../entities/account.entity';
import { Test } from '@nestjs/testing';
import { DatabaseModule } from '../../../database.module';

describe('AccountServiceTest', () => {
  let accountService: AccountService;

  beforeAll(async () => {
    await Test.createTestingModule({
      imports: [DatabaseModule]
    }).compile();

    const accountEntityRepository = getRepository<AccountEntity>(AccountEntity);

    jest.spyOn(accountEntityRepository, 'findOne')
      .mockImplementation(() => Promise.resolve(new AccountEntity()));

    jest.spyOn(accountEntityRepository, 'save')
      .mockImplementation(() => {
        const account = new AccountEntity();
        account.id = 1;

        return Promise.resolve(account);
      });

    accountService = new AccountService(accountEntityRepository);
  });

  describe('findOneById', () => {
    it('should return account', async () => {
      const account = await accountService.findOneById(1);

      expect(account).toBeInstanceOf(AccountEntity);
    });
  });

  describe('findOneByEmail', () => {
    it('should return account', async () => {
      const account = await accountService.findOneByEmail('test@test.com');

      expect(account).toBeInstanceOf(AccountEntity);
    });
  });

  describe('create', () => {
    it('should return id', async () => {
      const account = await accountService.create(new AccountEntity());

      expect(typeof account.id).toBe('number');
    });
  });

});
