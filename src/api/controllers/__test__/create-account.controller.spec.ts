import { capture, instance, mock } from 'ts-mockito';
import { CreateAccountController } from '../create-account.controller';
import { ICreateAccountUseCase } from '../../ports/out/create-account.port';
import { CreateAccountCommand } from '../../ports/in/create-account/create-account.command';

describe('CreateAccountControllerTest', () => {
  let createAccountController: CreateAccountController;
  let createAccountUseCase: ICreateAccountUseCase;

  beforeAll(() => {
    createAccountUseCase = mock<ICreateAccountUseCase>();
    createAccountController = new CreateAccountController(instance(createAccountUseCase));
  });

  test('should call createAccount method of createAccountUseCase', async () => {
    const createAccountCommand = new CreateAccountCommand(
      '123',
      'Test',
      'Test',
      'test@mail.com',
      'password',
      new Date('2021-05-22'),
      new Date('2021-05-22'),
    );

    await createAccountController.createAccount(createAccountCommand);

    const createAccountArguments = capture(createAccountUseCase.createAccount).first();
    expect(createAccountArguments[0]).toEqual(createAccountCommand);
  });
});
