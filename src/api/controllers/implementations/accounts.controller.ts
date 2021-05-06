import { Controller, Inject } from '@nestjs/common';
import { IAccountsController } from '../definitions/accounts.controller.interface';
import { CreateAccountResult } from '../../../database/interfaces/account.interface';
import { CreateAccountDto } from '../../dto/account.dto';
import {
  IAccountServiceSymbol,
  IAccountService,
} from '../../../database/services/definitions/account.service.interface';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AccountsController implements IAccountsController {
  constructor(@Inject(IAccountServiceSymbol)
              private readonly accountService: IAccountService) {
  }

  @MessagePattern('create-account')
  createAccount(createAccountData: CreateAccountDto): Promise<CreateAccountResult> {
    return this.accountService.create(createAccountData);
  }
}
