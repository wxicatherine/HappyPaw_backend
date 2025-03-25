
import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ShelterService } from './shelter.service';

@Controller('shelter')
export class ShelterController {
  constructor(private readonly shelterService: ShelterService) {}  

  @Get()
  findAll() {
    return this.shelterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shelterService.findOne(id);
  }

  @Post()
  create(@Body() data: any) {
    return this.shelterService.create(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shelterService.remove(id);
  }
}
