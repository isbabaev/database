import { IsString } from 'class-validator';

export class LoadAccountByEmailDto {
  @IsString()
  email: string;

  constructor(email: string) {
    this.email = email;
  }
}
