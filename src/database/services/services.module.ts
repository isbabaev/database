import { Module, Provider } from '@nestjs/common';
import { AccountService } from './implementations/account.service';
import { EntitiesModule } from '../entities/entities.module';

const providers: Provider[] = [
  AccountService,
];

@Module({
  imports: [EntitiesModule],
  providers,
  exports: [...providers],
})
export class ServicesModule { }
