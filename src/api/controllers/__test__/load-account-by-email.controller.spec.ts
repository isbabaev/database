import { instance, mock, verify } from 'ts-mockito';
import { ILoadAccountByEmailUseCase } from '../../../database/ports/in/load-account-by-email.use-case';
import { LoadAccountByEmailDto } from '../../dto/load-account-by-email.dto';
import { LoadAccountByEmailController } from '../load-account-by-email.controller';

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
})
