import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountEntity } from './entities/account.entity';
import { ProductEntity } from './entities/product.entity';
import { PurchaseEntity } from './entities/purchase.entity';
import 'reflect-metadata';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([
      AccountEntity,
      ProductEntity,
      PurchaseEntity,
    ])],
  controllers: [],
  providers: [],
})
export class AppModule {
}
