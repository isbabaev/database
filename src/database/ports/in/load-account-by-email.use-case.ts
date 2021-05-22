import { AccountEntity } from '../../entities/account.entity';

export const LoadAccountByEmailUseCaseSymbol = Symbol('LoadAccountByEmailUseCase');

export interface ILoadAccountByEmailUseCase {
  loadAccount(email: string): Promise<AccountEntity>;
}
