import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { AuthorizationService } from './authorization.service';
import { Authorizations } from'src/common/interfaces/user.interface'; // Define this DTO

@Controller('authorization')
export class AuthorizationController {
  constructor(private readonly authorizationService: AuthorizationService) {}

  // Отримати всі записи авторизації
  @Get()
  findAll() {
    return this.authorizationService.findAll();
  }

  // Отримати один запис авторизації по ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorizationService.findOne(id);
  }

  // Створити новий запис авторизації
  @Post()
  create(@Body() data: Authorizations) {
    return this.authorizationService.create(data);
  }

  // Видалити запис авторизації по ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorizationService.remove(id);
  }
}
