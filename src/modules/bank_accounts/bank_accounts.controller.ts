
import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { BankAccountsService } from './bank_accounts.service';

@Controller('bank_accounts')
export class BankAccountsController {
  constructor(private readonly bank_accountsServiceService: BankAccountsService) {}

  @Get()
  findAll() {
    return this.bank_accountsServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bank_accountsServiceService.findOne(id);
  }

  @Post()
  create(@Body() data: any) {
    return this.bank_accountsServiceService.create(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bank_accountsServiceService.remove(id);
  }
}
