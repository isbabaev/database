import { ClassProvider, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountEntity } from './entities/account.entity';
import { ProductEntity } from './entities/product.entity';
import { PurchaseEntity } from './entities/purchase.entity';
import { AccountService } from './services/implementations/account.service';
import { AccountServiceSymbol } from './services/definitions/account.service';
import { CreateAccountService } from './services/create-account.service';
import { CreateAccountPortSymbol } from '../api/ports/out/create-account.port';

const providers: ClassProvider[] = [
  {
    provide: AccountServiceSymbol,
    useClass: AccountService,
  },
  {
    provide: CreateAccountPortSymbol,
    useClass: CreateAccountService,
  },
];

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([
      AccountEntity,
      ProductEntity,
      PurchaseEntity,
    ]),
  ],
  providers,
  exports: [...providers],
})
export class DatabaseModule {
}
