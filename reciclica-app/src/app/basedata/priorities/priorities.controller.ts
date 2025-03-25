
import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { PrioritiesService } from './priorities.service';

@Controller('priorities')
export class PrioritiesController {
  constructor(private readonly prioritiesServiceService: PrioritiesService) {}

  @Get()
  findAll() {
    return this.prioritiesServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prioritiesServiceService.findOne(id);
  }

  @Post()
  create(@Body() data: any) {
    return this.prioritiesServiceService.create(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prioritiesServiceService.remove(id);
  }
}
