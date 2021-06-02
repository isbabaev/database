import { ClientProxy, ClientProxyFactory } from '@nestjs/microservices';
import { INestMicroservice, ValidationPipe } from '@nestjs/common';
import { getRepository, Repository } from 'typeorm';
import { ProductEntity } from '../src/database/entities/product.entity';
import { Test } from '@nestjs/testing';
import { ApiModule } from '../src/api/api.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { appConnectionOptionsFactory } from '../src/app-connection-options.factory';
import { CreateProductDto } from '../src/api/dto/create-product.dto';

describe('CreateProductE2eTest', () => {
  let clientProxy: ClientProxy;
  let productRepository: Repository<ProductEntity>;
  let app: INestMicroservice;

  beforeAll(async () => {
    const DatabaseClientProxySymbol = Symbol('DatabaseClientProxySymbol');
    const moduleRef = await Test.createTestingModule({
      imports: [ApiModule, ConfigModule.forRoot()],
      providers: [
        {
          provide: DatabaseClientProxySymbol,
          useFactory: (configService: ConfigService) =>
            ClientProxyFactory.create(appConnectionOptionsFactory(configService)),
          inject: [ConfigService],
        },
      ],
    }).compile();

    const configService = moduleRef.get(ConfigService);
    app = moduleRef.createNestMicroservice(appConnectionOptionsFactory(configService));
    app.useGlobalPipes(new ValidationPipe());
    await app.listenAsync();

    productRepository = getRepository(ProductEntity);
    clientProxy = moduleRef.get(DatabaseClientProxySymbol);
  });

  beforeEach(async () => {
    await productRepository.delete({});
  });

  afterAll(async () => {
    await productRepository.delete({});
    await app.close();
  });

  test('should create product', async () => {
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

    await clientProxy.send('create-product', createProductData).toPromise();

    const product = await productRepository.findOne(createProductData.id);
    expect(product).toEqual(createProductData);
  });
});
