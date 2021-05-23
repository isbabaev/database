import { validate } from 'class-validator';
import { LoadAccountByIdDto } from '../load-account-by-id.dto';

describe('LoadAccountByIdDtoTest', () => {
  test('validate should not return any errors', async () => {
    const loadAccountByIdData = new LoadAccountByIdDto('123');

    const errors = await validate(loadAccountByIdData);

    expect(errors.length).toBe(0);
  });

  test('validate should return error when id is not a string', async () => {
    const loadAccountByIdData = new LoadAccountByIdDto({} as any);

    const errors = await validate(loadAccountByIdData);

    expect(errors.length).toBe(1);
  });
});
