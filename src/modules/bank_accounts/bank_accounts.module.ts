
import { Module } from '@nestjs/common';
import { BankAccountsController } from './bank_accounts.controller';
import { BankAccountsService } from './bank_accounts.service';

@Module({
  controllers: [BankAccountsController],
  providers: [BankAccountsService],
})
export class BankAccountsModule {}
