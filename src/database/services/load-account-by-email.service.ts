import { ILoadAccountByEmailUseCase } from '../ports/in/load-account-by-email.use-case';
import { AccountEntity } from '../entities/account.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class LoadAccountByEmailService implements ILoadAccountByEmailUseCase {
  constructor(@InjectRepository(AccountEntity)
              private readonly accountRepository: Repository<AccountEntity>) {
  }

  async loadAccount(email: string): Promise<AccountEntity | null> {
    const account = await this.accountRepository.findOne({email});
    return account || null;
  }
}
