import { Controller } from '@nestjs/common';
import { AccountService } from '../../../database/services/account.service';
import { AccountControllerInterface } from '../definitions/account.controller.interface';
import { CreateAccountResult } from '../../../database/interfaces/account.interface';
import { CreateAccountDto } from '../../dto/account.dto';

@Controller()
export class AccountController implements AccountControllerInterface {
  constructor(private readonly accountService: AccountService) {
  }

  createAccount(createAccountData: CreateAccountDto): Promise<CreateAccountResult> {
  }
}
