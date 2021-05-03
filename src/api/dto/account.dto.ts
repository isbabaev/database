import { CreateAccount } from '../../database/interfaces/account.interface';
import { IsEmail, IsString } from 'class-validator';

export class CreateAccountDto implements CreateAccount {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
