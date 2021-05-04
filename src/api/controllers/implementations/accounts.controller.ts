import { Controller, Inject, Post } from '@nestjs/common';
import { IAccountsController } from '../definitions/accounts.controller.interface';
import { CreateAccountResult } from '../../../database/interfaces/account.interface';
import { CreateAccountDto } from '../../dto/account.dto';
import {
  AccountServiceSymbol,
  IAccountService,
} from '../../../database/services/definitions/account.service.interface';

@Controller('accounts')
export class AccountsController implements IAccountsController {
  constructor(@Inject(AccountServiceSymbol)
              private readonly accountService: IAccountService) {
  }

  @Post()
  createAccount(createAccountData: CreateAccountDto): Promise<CreateAccountResult> {
    console.log('запрос тут');
    return;
  }
}
