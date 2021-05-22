import { ClassProvider, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountEntity } from './entities/account.entity';
import { ProductEntity } from './entities/product.entity';
import { PurchaseEntity } from './entities/purchase.entity';
import { AccountService } from './services/implementations/account.service';
import { AccountServiceSymbol } from './services/definitions/account.service';
import { CreateAccountUseCaseSymbol } from './ports/in/create-account.use-case';
import { CreateAccountService } from './services/create-account.service';

const providers: ClassProvider[] = [
  {
    provide: AccountServiceSymbol,
    useClass: AccountService,
  },
  {
    provide: CreateAccountUseCaseSymbol,
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
