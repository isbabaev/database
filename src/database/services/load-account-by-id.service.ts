import { ILoadAccountByIdUseCase } from '../ports/in/load-account-by-id.use-case';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountEntity } from '../entities/account.entity';
import { Repository } from 'typeorm';

export class LoadAccountByIdService implements ILoadAccountByIdUseCase {
  constructor(@InjectRepository(AccountEntity)
              private readonly accountRepository: Repository<AccountEntity>) {
  }

  loadAccount(id: string): Promise<AccountEntity> {
    return this.accountRepository.findOne(id);
  }
}
