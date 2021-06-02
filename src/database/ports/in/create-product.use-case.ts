import { ProductEntity } from '../../entities/product.entity';

export const CreateProductUseCaseSymbol = Symbol('CreateProductUseCase');

export interface ICreateProductUseCase {
  createProduct(product: ProductEntity): Promise<void>;
}
