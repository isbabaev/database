import { AccountEntity } from '../../entities/account.entity';
import { CreateAccount } from '../../interfaces/account.interface';

export const IAccountServiceSymbol = Symbol('IAccountService');

export interface IAccountService {
  findOneById(id: number): Promise<AccountEntity>;
  findOneByEmail(email: string): Promise<AccountEntity>;
  create(createData: CreateAccount): Promise<void>;
}
