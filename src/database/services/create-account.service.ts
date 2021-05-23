import { InjectRepository } from '@nestjs/typeorm';
import { AccountEntity } from '../entities/account.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { ICreateAccountUseCase } from '../ports/in/create-account.use-case';

@Injectable()
export class CreateAccountService implements ICreateAccountUseCase {
  constructor(@InjectRepository(AccountEntity)
              private readonly accountRepository: Repository<AccountEntity>) {
  }

  async createAccount(account: AccountEntity): Promise<void> {
    await this.accountRepository.insert(account);
  }
}
