import { Controller, Inject } from '@nestjs/common';
import {
  ILoadAccountByIdUseCase,
  LoadAccountByIdUseCaseSymbol,
} from '../../database/ports/in/load-account-by-id.use-case';
import { MessagePattern } from '@nestjs/microservices';
import { LoadAccountByIdDto } from '../dto/load-account-by-id.dto';
import { AccountEntity } from '../../database/entities/account.entity';

@Controller()
export class LoadAccountByIdController {
  constructor(@Inject(LoadAccountByIdUseCaseSymbol)
              private readonly loadAccountByIdUseCase: ILoadAccountByIdUseCase) {
  }

  @MessagePattern('load-account-by-id')
  loadAccount(loadAccountData: LoadAccountByIdDto): Promise<AccountEntity | null> {
    return this.loadAccountByIdUseCase.loadAccount(loadAccountData.id);
  }
}
