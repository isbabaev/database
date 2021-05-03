import { Module } from '@nestjs/common';
import { AccountController } from './implementations/account.controller';
import { ServicesModule } from '../../database/services/services.module';

@Module({
  imports: [
    ServicesModule
  ],
  controllers: [
    AccountController
  ]
})
export class ControllersModule {

}
