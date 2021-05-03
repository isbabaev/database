import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountEntity } from './account.entity';
import { ProductEntity } from './product.entity';
import { PurchaseEntity } from './purchase.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AccountEntity,
      ProductEntity,
      PurchaseEntity,
    ]),
  ]
})
export class EntitiesModule {}
