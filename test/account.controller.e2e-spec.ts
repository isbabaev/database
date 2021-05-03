import { AccountController } from '../src/api/controllers/implementations/account.controller';
import connection from './connection';
import { Test } from '@nestjs/testing';
import { ControllersModule } from '../src/api/controllers/controllers.module';

describe('AccountControllerE2eTest', () => {
  let accountController: AccountController;

  beforeAll(async () => {
    await connection.create();

    const module = await Test.createTestingModule({
      imports: [ControllersModule],
    }).compile();

    accountController = module.get<AccountController>(AccountController);
  });

  afterAll(async () => {
    await connection.close();
  });

  beforeEach(async () => {
    await connection.clear();
  });

  it('should create account', () => {
  });
});
