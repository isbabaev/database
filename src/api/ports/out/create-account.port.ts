import { CreateAccountCommand } from '../in/create-account/create-account.command';

export const CreateAccountPortSymbol = Symbol('CreateAccountPort');

export interface ICreateAccountUseCase {
  createAccount(command: CreateAccountCommand): Promise<void>;
}
