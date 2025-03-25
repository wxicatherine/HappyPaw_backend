
import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesServiceService: CategoriesService) {}

  @Get()
  findAll() {
    return this.categoriesServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriesServiceService.findOne(id);
  }

  @Post()
  create(@Body() data: any) {
    return this.categoriesServiceService.create(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesServiceService.remove(id);
  }
}
