import { Module } from '@nestjs/common';
import { AccountsController } from './controllers/implementations/accounts.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [
    AccountsController,
  ],
})
export class ApiModule {

}
