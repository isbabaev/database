import { capture, instance, mock } from 'ts-mockito';
import { ICreateProductUseCase } from '../../../database/ports/in/create-product.use-case';
import { CreateProductDto } from '../../dto/create-product.dto';
import { CreateProductController } from '../create-product.controller';

describe('CreateProductControllerTest', () => {
  let createProductController: CreateProductController;
  let mockedCreateProductUseCase: ICreateProductUseCase;

  beforeAll(() => {
    mockedCreateProductUseCase = mock<ICreateProductUseCase>();
    createProductController = new CreateProductController(instance(mockedCreateProductUseCase));
  });

  test('should call createProduct method of mockedCreateProductUseCase', async () => {
    const createProductData = new CreateProductDto(
      '123',
      'ProductName',
      'ProductDescription',
      ['http://localhost:3000/photo'],
      100.50,
      '123',
      new Date('2021-05-22'),
      new Date('2021-05-22'),
    );

    await createProductController.createProduct(createProductData);

    const createProductArguments = capture(mockedCreateProductUseCase.createProduct).first();
    expect(createProductArguments[0]).toEqual(createProductData);
  });
});
