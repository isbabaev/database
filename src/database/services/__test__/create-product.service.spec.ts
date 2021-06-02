import { Repository } from 'typeorm';
import { ProductEntity } from '../../entities/product.entity';
import { instance, mock, verify } from 'ts-mockito';
import { CreateProductService } from '../create-product.service';

describe('CreateProductServiceTest', () => {
  let createProductService: CreateProductService;
  let mockedProductRepository: Repository<ProductEntity>;

  beforeAll(() => {
    mockedProductRepository = mock<Repository<ProductEntity>>();
    createProductService = new CreateProductService(instance(mockedProductRepository));
  });

  test('should call insert method of mockedProductRepository', async () => {
    const product = mock(ProductEntity);

    await createProductService.createProduct(product);

    verify(mockedProductRepository.insert(product)).called();
  });
});
