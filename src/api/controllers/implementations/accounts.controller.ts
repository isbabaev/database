import { Controller, Inject } from '@nestjs/common';
import { IAccountsController } from '../definitions/accounts.controller';
import { CreateAccountDto } from '../../dto/account.dto';
import {
  IAccountServiceSymbol,
  IAccountService,
} from '../../../database/services/definitions/account.service';
import { MessagePattern } from '@nestjs/microservices';
import { AccountEntity } from '../../../database/entities/account.entity';

@Controller()
export class AccountsController implements IAccountsController {
  constructor(@Inject(IAccountServiceSymbol)
              private readonly accountService: IAccountService) {
  }

  @MessagePattern('create-account')
  createAccount(createAccountData: CreateAccountDto): Promise<void> {
    return this.accountService.create(createAccountData);
  }

  @MessagePattern('find-account-by-email')
  findAccountByEmail(email: string): Promise<AccountEntity> {
    return this.accountService.findOneByEmail(email);
  }
}
