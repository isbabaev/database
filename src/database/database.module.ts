import { ClassProvider, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountEntity } from './entities/account.entity';
import { ProductEntity } from './entities/product.entity';
import { PurchaseEntity } from './entities/purchase.entity';
import { AccountService } from './services/implementations/account.service';
import { IAccountServiceSymbol } from './services/definitions/account.service.interface';

const providers: ClassProvider[] = [
  {
    provide: IAccountServiceSymbol,
    useClass: AccountService,
  },
];

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AccountEntity,
      ProductEntity,
      PurchaseEntity,
    ]),
    TypeOrmModule.forRoot(),
  ],
  providers,
  exports: [...providers],
})
export class DatabaseModule {
}
