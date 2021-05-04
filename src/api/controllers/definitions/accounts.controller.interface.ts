import { CreateAccountResult } from '../../../database/interfaces/account.interface';
import { CreateAccountDto } from '../../dto/account.dto';

export interface IAccountsController {
  createAccount(createAccountData: CreateAccountDto): Promise<CreateAccountResult>;
}
