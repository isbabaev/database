import { Controller, Inject } from '@nestjs/common';
import {
  ILoadAccountByEmailUseCase,
  LoadAccountByEmailUseCaseSymbol,
} from '../../database/ports/in/load-account-by-email.use-case';
import { MessagePattern } from '@nestjs/microservices';
import { LoadAccountByEmailDto } from '../dto/load-account-by-email.dto';
import { AccountEntity } from '../../database/entities/account.entity';

@Controller()
export class LoadAccountByEmailController {
  constructor(@Inject(LoadAccountByEmailUseCaseSymbol)
              private readonly loadAccountByEmailUseCase: ILoadAccountByEmailUseCase) {
  }

  @MessagePattern('load-account-by-email')
  loadAccount(loadAccountData: LoadAccountByEmailDto): Promise<AccountEntity | null> {
    return this.loadAccountByEmailUseCase.loadAccount(loadAccountData.email);
  }
}
