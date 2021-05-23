import { AccountEntity } from '../../entities/account.entity';

export const LoadAccountByIdUseCaseSymbol = Symbol('LoadAccountByIdUseCase');

export interface ILoadAccountByIdUseCase {
  loadAccount(id: string): Promise<AccountEntity | null>;
}
