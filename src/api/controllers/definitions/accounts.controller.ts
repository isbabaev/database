import { CreateAccountDto } from '../../dto/account.dto';
import { AccountEntity } from '../../../database/entities/account.entity';

export interface IAccountsController {
  createAccount(createAccountData: CreateAccountDto): Promise<void>;
  findAccountByEmail(email: string): Promise<AccountEntity>;
}
