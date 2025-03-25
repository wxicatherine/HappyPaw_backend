
import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { LocationService } from './location.service';
import { Locations } from 'src/common/interfaces/user.interface';
@Controller('location')
export class LocationController {
  constructor(private readonly locationServiceService: LocationService) {}

  @Get()
  findAll() {
    return this.locationServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.locationServiceService.findOne(id);
  }

  @Post()
  create(@Body() data: Locations) {
    return this.locationServiceService.create(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.locationServiceService.remove(id);
  }
}
