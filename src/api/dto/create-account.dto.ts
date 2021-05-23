import { IsDate, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import "reflect-metadata";

export class CreateAccountDto {
  @IsString()
  id: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsDate()
  @Type(() => Date)
  createdAt: Date;

  @IsDate()
  @Type(() => Date)
  updatedAt: Date;

  constructor(id: string,
              firstName: string,
              lastName: string,
              email: string,
              password: string,
              createdAt: Date,
              updatedAt: Date) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
