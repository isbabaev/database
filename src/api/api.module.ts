import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CreateAccountController } from './controllers/create-account.controller';
import { LoadAccountByEmailController } from './controllers/load-account-by-email.controller';
import { LoadAccountByIdController } from './controllers/load-account-by-id.controller';
import { CreateProductController } from './controllers/create-product.controller';

@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [
    CreateAccountController,
    LoadAccountByEmailController,
    LoadAccountByIdController,
    CreateProductController,
  ],
})
export class ApiModule {

}
