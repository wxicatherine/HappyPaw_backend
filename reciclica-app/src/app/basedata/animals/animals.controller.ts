import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { AnimalsService } from './animals.service';

@Controller('animals')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  // Отримати всіх тварин
  @Get()
  findAll() {
    return this.animalsService.findAll();
  }

  // Отримати одну тварину за ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animalsService.findOne(id);
  }

  // Додати нову тварину
  @Post()
  create(@Body() animalDto: any) {
    return this.animalsService.create(animalDto);
  }

  // Оновити інформацію про тварину
  @Patch(':id')
  update(@Param('id') id: string, @Body() animalDto: any) {
    return this.animalsService.update(id, animalDto);
  }

  // Видалити тварину
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.animalsService.delete(id);
  }
}
