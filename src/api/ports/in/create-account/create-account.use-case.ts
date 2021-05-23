import { CreateAccountCommand } from './create-account.command';

export interface ICreateAccountUseCase {
  createAccount(command: CreateAccountCommand): Promise<void>;
}
