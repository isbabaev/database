import { CreateAccountResult } from '../../../database/interfaces/account.interface';
import { CreateAccountDto } from '../../dto/account.dto';
import { AccountEntity } from '../../../database/entities/account.entity';

export interface IAccountsController {
  createAccount(createAccountData: CreateAccountDto): Promise<CreateAccountResult>;
  findAccountByEmail(email: string): Promise<AccountEntity>;
}
