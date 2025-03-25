//adoption_requests.controller.ts
import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { AdoptionRequestsService } from './adoption_requests.service';

@Controller('adoption-requests')
export class AdoptionRequestsController {
  constructor(private readonly adoptionRequestsService: AdoptionRequestsService) {}

  @Get()
  findAll() {
    return this.adoptionRequestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adoptionRequestsService.findOne(id);
  }

  @Post()
  create(@Body() adoptionData: { volunteer_id: string; shelter_id: string; animal_id: string; status: string }) {
    return this.adoptionRequestsService.create(adoptionData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adoptionRequestsService.remove(id);
  }
}
