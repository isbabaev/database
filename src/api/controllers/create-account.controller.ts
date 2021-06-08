import { Controller, Inject } from '@nestjs/common';
import { CreateAccountDto } from '../dto/create-account.dto';
import { MessagePattern } from '@nestjs/microservices';
import { CreateAccountUseCaseSymbol, ICreateAccountUseCase } from '../../database/ports/in/create-account.use-case';
import { AccountEntity } from '../../database/entities/account.entity';

@Controller()
export class CreateAccountController {
  constructor(@Inject(CreateAccountUseCaseSymbol)
              private readonly createAccountUseCase: ICreateAccountUseCase) {
  }

  @MessagePattern('create-account')
  createAccount(command: CreateAccountDto): Promise<void> {
    const {id, firstName, lastName, email, password, createdAt, updatedAt} = command;
    const account = new AccountEntity(id, firstName, lastName, email, password, createdAt, updatedAt);
    return this.createAccountUseCase.createAccount(account);
  }
}
