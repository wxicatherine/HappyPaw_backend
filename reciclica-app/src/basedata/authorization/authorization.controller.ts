
import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { AuthorizationService } from './authorization.service';

@Controller('authorization')
export class AuthorizationController {
  constructor(private readonly authorizationServiceService: AuthorizationService) {}

  @Get()
  findAll() {
    return this.authorizationServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorizationServiceService.findOne(id);
  }

  @Post()
  create(@Body() data: any) {
    return this.authorizationServiceService.create(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorizationServiceService.remove(id);
  }
}
