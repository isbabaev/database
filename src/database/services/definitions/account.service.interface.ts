import { AccountEntity } from '../../entities/account.entity';
import { CreateAccount, CreateAccountResult } from '../../interfaces/account.interface';

export const AccountServiceSymbol = Symbol('IAccountService');

export interface IAccountService {
  findOneById(id: number): Promise<AccountEntity>;
  create(createData: CreateAccount): Promise<CreateAccountResult>;
}
