import { validate } from 'class-validator';
import { LoadAccountByEmailDto } from '../load-account-by-email.dto';

describe('LoadAccountByEmailDtoTest', () => {
  test('validate should not return any errors', async () => {
    const loadAccountByEmailDto = new LoadAccountByEmailDto('test@mail.com');

    const errors = await validate(loadAccountByEmailDto);

    expect(errors.length).toBe(0);
  });

  test('validate should return error when email is not a string', async () => {
    const loadAccountByEmailDto = new LoadAccountByEmailDto({} as any);

    const errors = await validate(loadAccountByEmailDto);

    expect(errors.length).toBe(1);
  });
});
