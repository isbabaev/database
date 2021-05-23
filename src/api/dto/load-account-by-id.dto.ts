import { IsString } from 'class-validator';

export class LoadAccountByIdDto {
  @IsString()
  id: string;

  constructor(id: string) {
    this.id = id;
  }
}
