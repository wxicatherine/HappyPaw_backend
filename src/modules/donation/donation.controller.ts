
import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { DonationService } from './donation.service';

@Controller('donation')
export class DonationController {
  constructor(private readonly donationService: DonationService) {}  

  @Get()
  findAll() {
    return this.donationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.donationService.findOne(id);
  }

  @Post()
  create(@Body() data: any) {
    return this.donationService.create(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.donationService.remove(id);
  }
}
