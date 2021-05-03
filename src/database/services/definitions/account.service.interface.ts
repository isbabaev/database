import { AccountEntity } from '../../entities/account.entity';
import { CreateAccount, CreateAccountResult } from '../../interfaces/account.interface';

export interface AccountServiceInterface {
  findOneById(id: number): Promise<AccountEntity>;
  create(createData: CreateAccount): Promise<CreateAccountResult>;
}
