import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(), // Додає підтримку .env файлів
    
  ],
})
export class AppModule {}
