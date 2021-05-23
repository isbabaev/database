import { validate } from 'class-validator';
import { CreateAccountDto } from '../create-account.dto';

describe('CreateAccountCommandTest', () => {
  test('validate should not return any errors', async () => {
    const createAccountCommand = new CreateAccountDto(
      '793bbc61-e5d9-476b-b40c-26e9ef33e871',
      'Test',
      'Test',
      'test@mail.com',
      'password',
      new Date('2021-05-22'),
      new Date('2021-05-22')
    );

    const errors = await validate(createAccountCommand);

    expect(errors.length).toBe(0);
  });

  test('validate should return error when id is not string', async () => {
    const createAccountCommand = new CreateAccountDto(
      {} as any,
      'Test',
      'Test',
      'test@mail.com',
      'password',
      new Date('2021-05-22'),
      new Date('2021-05-22')
    );

    const errors = await validate(createAccountCommand);

    expect(errors.length).toBe(1);
  });

  test('validate should return error when firstName is not string', async () => {
    const createAccountCommand = new CreateAccountDto(
      '793bbc61-e5d9-476b-b40c-26e9ef33e871',
      {} as any,
      'Test',
      'test@mail.com',
      'password',
      new Date('2021-05-22'),
      new Date('2021-05-22')
    );

    const errors = await validate(createAccountCommand);

    expect(errors.length).toBe(1);
  });

  test('validate should return error when lastName is not string', async () => {
    const createAccountCommand = new CreateAccountDto(
      '793bbc61-e5d9-476b-b40c-26e9ef33e871',
      'Test',
      {} as any,
      'test@mail.com',
      'password',
      new Date('2021-05-22'),
      new Date('2021-05-22')
    );

    const errors = await validate(createAccountCommand);

    expect(errors.length).toBe(1);
  });

  test('validate should return error when email is not string', async () => {
    const createAccountCommand = new CreateAccountDto(
      '793bbc61-e5d9-476b-b40c-26e9ef33e871',
      'Test',
      'Test',
      {} as any,
      'password',
      new Date('2021-05-22'),
      new Date('2021-05-22')
    );

    const errors = await validate(createAccountCommand);

    expect(errors.length).toBe(1);
  });

  test('validate should return error when password is not string', async () => {
    const createAccountCommand = new CreateAccountDto(
      '793bbc61-e5d9-476b-b40c-26e9ef33e871',
      'Test',
      'Test',
      'test@mail.com',
      {} as any,
      new Date('2021-05-22'),
      new Date('2021-05-22')
    );

    const errors = await validate(createAccountCommand);

    expect(errors.length).toBe(1);
  });

  test('validate should return error when createdAt is not Date', async () => {
    const createAccountCommand = new CreateAccountDto(
      '793bbc61-e5d9-476b-b40c-26e9ef33e871',
      'Test',
      'Test',
      'test@mail.com',
      'password',
      {} as any,
      new Date('2021-05-22')
    );

    const errors = await validate(createAccountCommand);

    expect(errors.length).toBe(1);
  });

  test('validate should return error when updatedAt is not Date', async () => {
    const createAccountCommand = new CreateAccountDto(
      '793bbc61-e5d9-476b-b40c-26e9ef33e871',
      'Test',
      'Test',
      'test@mail.com',
      'password',
      new Date('2021-05-22'),
      {} as any,
    );

    const errors = await validate(createAccountCommand);

    expect(errors.length).toBe(1);
  });
})
