import { capture, instance, mock } from 'ts-mockito';
import { CreateAccountController } from '../create-account.controller';
import { CreateAccountDto } from '../../dto/create-account.dto';
import { ICreateAccountUseCase } from '../../../database/ports/in/create-account.use-case';

describe('CreateAccountControllerTest', () => {
  let createAccountController: CreateAccountController;
  let createAccountUseCase: ICreateAccountUseCase;

  beforeAll(() => {
    createAccountUseCase = mock<ICreateAccountUseCase>();
    createAccountController = new CreateAccountController(instance(createAccountUseCase));
  });

  test('should call createAccount method of createAccountUseCase', async () => {
    const createAccountData = new CreateAccountDto(
      '123',
      'Test',
      'Test',
      'test@mail.com',
      'password',
      new Date('2021-05-22'),
      new Date('2021-05-22'),
    );

    await createAccountController.createAccount(createAccountData);

    const createAccountArguments = capture(createAccountUseCase.createAccount).first();
    expect(createAccountArguments[0]).toEqual(createAccountData);
  });
});
