import { ILoadAccountByIdUseCase } from '../../../database/ports/in/load-account-by-id.use-case';
import { anyString, instance, mock, verify, when } from 'ts-mockito';
import { LoadAccountByIdController } from '../load-account-by-id.controller';
import { LoadAccountByIdDto } from '../../dto/load-account-by-id.dto';
import { AccountEntity } from '../../../database/entities/account.entity';

describe('LoadAccountByIdControllerTest', () => {
  let loadAccountByIdController: LoadAccountByIdController;
  let loadAccountByIdUseCase: ILoadAccountByIdUseCase;

  beforeAll(() => {
    loadAccountByIdUseCase = mock<ILoadAccountByIdUseCase>();
    loadAccountByIdController = new LoadAccountByIdController(instance(loadAccountByIdUseCase));
  });

  test('should call method loadAccount of loadAccountByIdUseCase', async () => {
    const loadAccountByIdData = new LoadAccountByIdDto('123');

    await loadAccountByIdController.loadAccount(loadAccountByIdData);

    verify(loadAccountByIdUseCase.loadAccount(loadAccountByIdData.id)).called();
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
    when(loadAccountByIdUseCase.loadAccount(anyString())).thenResolve(newAccount);

    const account = await loadAccountByIdController.loadAccount({id: ''});

    expect(account).toEqual(newAccount);
  });

  test('should return null when method loadAccount of loadAccountByIdUseCase returns null', async () => {
    const account = await loadAccountByIdController.loadAccount({id: ''});

    expect(account).toBeNull();
  });
});
