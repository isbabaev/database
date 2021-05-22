import { AccountEntity } from '../../entities/account.entity';

export const CreateAccountUseCaseSymbol = Symbol('CreateAccountUseCase');

export interface ICreateAccountUseCase {
  createAccount(account: AccountEntity): Promise<void>;
}
