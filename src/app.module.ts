import { Module } from '@nestjs/common';
import 'reflect-metadata';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ControllersModule } from './api/controllers/controllers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ControllersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
