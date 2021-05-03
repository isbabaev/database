import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountEntity } from '../entities/account.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AccountService {
  constructor(@InjectRepository(AccountEntity)
              private readonly accountEntityRepository: Repository<AccountEntity>) {
  }

  findOneById(id: number): Promise<AccountEntity> {
    return this.accountEntityRepository.findOne(id);
  }
}
