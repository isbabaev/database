import { CreateAccountResult } from '../../../database/interfaces/account.interface';
import { CreateAccountDto } from '../../dto/account.dto';

export interface AccountControllerInterface {
  createAccount(createAccountData: CreateAccountDto): Promise<CreateAccountResult>;
}
