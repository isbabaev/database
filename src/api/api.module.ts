import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CreateAccountController } from './controllers/create-account.controller';
import { LoadAccountByEmailController } from './controllers/load-account-by-email.controller';

@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [
    CreateAccountController,
    LoadAccountByEmailController,
  ],
})
export class ApiModule {

}
