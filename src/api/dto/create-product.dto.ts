import { IsDate, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString({ each: true })
  photoUris: string[];

  @IsNumber()
  price: number;

  @IsString()
  sellerId: string;

  @IsDate()
  @Type(() => Date)
  createdAt: Date;

  @IsDate()
  @Type(() => Date)
  updatedAt: Date;

  constructor(id: string,
              name: string,
              description: string,
              photoUris: string[],
              price: number,
              sellerId: string,
              createdAt: Date,
              updatedAt: Date) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.photoUris = photoUris;
    this.price = price;
    this.sellerId = sellerId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
