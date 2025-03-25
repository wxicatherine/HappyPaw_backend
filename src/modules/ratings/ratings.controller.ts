
import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { RatingsService } from './ratings.service';

@Controller('ratings')
export class RatingsController {
  constructor(private readonly ratingsServiceService: RatingsService) {}

  @Get()
  findAll() {
    return this.ratingsServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ratingsServiceService.findOne(id);
  }

  @Post()
  create(@Body() data: any) {
    return this.ratingsServiceService.create(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ratingsServiceService.remove(id);
  }
}
