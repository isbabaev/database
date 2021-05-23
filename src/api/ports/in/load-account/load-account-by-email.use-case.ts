import { LoadAccountByEmailDto } from '../../../dto/load-account-by-email.dto';

export interface ILoadAccountByEmailUseCase {
  loadAccount(command: LoadAccountByEmailDto): Promise<>;
}
