import { CreateProductUseCaseSymbol, ICreateProductUseCase } from '../../database/ports/in/create-product.use-case';
import { CreateProductDto } from '../dto/create-product.dto';
import { ProductEntity } from '../../database/entities/product.entity';
import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class CreateProductController {
  constructor(@Inject(CreateProductUseCaseSymbol)
              private readonly createProductUseCase: ICreateProductUseCase) {
  }

  @MessagePattern('create-product')
  createProduct(createProductData: CreateProductDto): Promise<void> {
    const { id, name, description, photoUris, price, sellerId, createdAt, updatedAt } = createProductData;
    return this.createProductUseCase.createProduct(
      new ProductEntity(id, name, description, photoUris, price, sellerId, createdAt, updatedAt),
    );
  }
}
