import { ClassProvider, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountEntity } from './entities/account.entity';
import { ProductEntity } from './entities/product.entity';
import { PurchaseEntity } from './entities/purchase.entity';
import { CreateAccountService } from './services/create-account.service';
import { CreateAccountUseCaseSymbol } from './ports/in/create-account.use-case';
import { LoadAccountByEmailUseCaseSymbol } from './ports/in/load-account-by-email.use-case';
import { LoadAccountByEmailService } from './services/load-account-by-email.service';
import { LoadAccountByIdUseCaseSymbol } from './ports/in/load-account-by-id.use-case';
import { LoadAccountByIdService } from './services/load-account-by-id.service';

const providers: ClassProvider[] = [
  {
    provide: CreateAccountUseCaseSymbol,
    useClass: CreateAccountService,
  },
  {
    provide: LoadAccountByEmailUseCaseSymbol,
    useClass: LoadAccountByEmailService,
  },
  {
    provide: LoadAccountByIdUseCaseSymbol,
    useClass: LoadAccountByIdService,
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
