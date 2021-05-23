import { Controller, Inject } from '@nestjs/common';
import { CreateAccountCommand } from '../ports/in/create-account/create-account.command';
import { MessagePattern } from '@nestjs/microservices';
import { CreateAccountUseCaseSymbol, ICreateAccountUseCase } from '../../database/ports/in/create-account.use-case';
import { AccountEntity } from '../../database/entities/account.entity';

@Controller()
export class CreateAccountController implements ICreateAccountUseCase {
  constructor(@Inject(CreateAccountUseCaseSymbol)
              private readonly createAccountUseCase: ICreateAccountUseCase) {
  }

  @MessagePattern('create-account')
  createAccount(command: CreateAccountCommand): Promise<void> {
    const {id, firstName, lastName, email, password, createdAt, updatedAt} = command;
    const account = new AccountEntity(id, firstName, lastName, email, password, createdAt, updatedAt);
    return this.createAccountUseCase.createAccount(account); // TODO зависимость идет не туда
  }
}
