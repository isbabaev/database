import { anyString, anything, instance, mock, verify, when } from 'ts-mockito';
import { ILoadAccountByEmailUseCase } from '../../../database/ports/in/load-account-by-email.use-case';
import { LoadAccountByEmailDto } from '../../dto/load-account-by-email.dto';
import { LoadAccountByEmailController } from '../load-account-by-email.controller';
import { AccountEntity } from '../../../database/entities/account.entity';

describe('LoadAccountByEmailControllerTest', () => {
  let loadAccountByEmailController: LoadAccountByEmailController;
  let loadAccountByEmailUseCase: ILoadAccountByEmailUseCase;

  beforeAll(() => {
    loadAccountByEmailUseCase = mock<ILoadAccountByEmailUseCase>();
    loadAccountByEmailController = new LoadAccountByEmailController(instance(loadAccountByEmailUseCase));
  });

  test('should call method loadAccount of loadAccountByEmailUseCase', async() => {
    const loadAccountByEmailDto = new LoadAccountByEmailDto('test@mail.com');

    await loadAccountByEmailController.loadAccount(loadAccountByEmailDto);

    verify(loadAccountByEmailUseCase.loadAccount(loadAccountByEmailDto.email)).called();
  });

  test('should return account', async () => {
    const newAccount = new AccountEntity(
      '123',
      'Test',
      'Test',
      'test@mail.com',
      'password',
      new Date('2021-05-22'),
      new Date('2021-05-22')
    );
    when(loadAccountByEmailUseCase.loadAccount(anyString())).thenResolve(newAccount);

    const account = await loadAccountByEmailController.loadAccount({email: ''});

    expect(account).toEqual(newAccount);
  });
})
