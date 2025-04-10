
import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { BreadsService } from './breads.service';
import { Breeds } from 'src/common/interfaces/user.interface';
@Controller('breads')
export class BreadsController {
  constructor(private readonly breadsServiceService: BreadsService) {}

  @Get()
  findAll() {
    return this.breadsServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.breadsServiceService.findOne(id);
  }

  @Post()
  create(@Body() data: Breeds) {
    return this.breadsServiceService.create(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.breadsServiceService.remove(id);
  }
}
