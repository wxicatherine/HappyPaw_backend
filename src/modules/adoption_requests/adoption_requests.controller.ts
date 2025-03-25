import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { AdoptionRequestsService } from './adoption_requests.service';

@Controller('adoption-requests') // Указывает префикс маршрута
export class AdoptionRequestsController {
  constructor(private readonly adoptionRequestsService: AdoptionRequestsService) {}

  @Get() // Обрабатывает GET-запрос на /adoption-requests
  findAll() {
    return this.adoptionRequestsService.findAll();
  }

  @Get(':id') // Обрабатывает GET-запрос на /adoption-requests/:id
  findOne(@Param('id') id: string) {
    return this.adoptionRequestsService.findOne(id);
  }

  @Post() // Обрабатывает POST-запрос на /adoption-requests
  create(@Body() adoptionData: { volunteer_id: string; shelter_id: string; animal_id: string; status: string }) {
    return this.adoptionRequestsService.create(adoptionData);
  }

  @Delete(':id') // Обрабатывает DELETE-запрос на /adoption-requests/:id
  remove(@Param('id') id: string) {
    return this.adoptionRequestsService.remove(id);
  }
}
