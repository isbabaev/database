import { ILoadAccountByIdUseCase } from '../../../database/ports/in/load-account-by-id.use-case';
import { instance, mock, verify } from 'ts-mockito';
import { LoadAccountByIdController } from '../load-account-by-id.controller';
import { LoadAccountByIdDto } from '../../dto/load-account-by-id.dto';

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
});
