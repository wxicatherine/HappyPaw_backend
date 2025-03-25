import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Глобальные фильтры ошибок
  app.useGlobalFilters(new HttpExceptionFilter());

  // Включаем валидацию данных
  app.useGlobalPipes(new ValidationPipe());

  // Разрешаем CORS
  app.enableCors();

  const PORT = process.env["PORT"] ?? "3000"; // Указываем значение по умолчанию
  await app.listen(3000); // Преобразуем в число
console.log(`🚀 Server running on http://localhost:${PORT}`);
}
bootstrap();
