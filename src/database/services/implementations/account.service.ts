import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountEntity } from '../../entities/account.entity';
import { Repository } from 'typeorm';
import { IAccountService } from '../definitions/account.service.interface';
import { CreateAccount, CreateAccountResult } from '../../interfaces/account.interface';

@Injectable()
export class AccountService implements IAccountService {
  constructor(@InjectRepository(AccountEntity)
              private readonly accountEntityRepository: Repository<AccountEntity>) {
  }

  findOneById(id: number): Promise<AccountEntity> {
    return this.accountEntityRepository.findOne(id);
  }

  async create(createData: CreateAccount): Promise<CreateAccountResult> {
    const account = await this.accountEntityRepository.save(createData);

    return { id: account.id }
  }
}
