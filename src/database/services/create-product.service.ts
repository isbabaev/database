import { Repository } from 'typeorm';
import { ProductEntity } from '../entities/product.entity';
import { ICreateProductUseCase } from '../ports/in/create-product.use-case';
import { InjectRepository } from '@nestjs/typeorm';

export class CreateProductService implements ICreateProductUseCase{
  constructor(@InjectRepository(ProductEntity)
              private readonly productRepository: Repository<ProductEntity>) {
  }

  async createProduct(product: ProductEntity): Promise<void> {
    await this.productRepository.insert(product);
  }
}
