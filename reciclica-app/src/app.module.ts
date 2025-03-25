import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthorizationModule } from './basedata/authorization/authorization.module';
import { SupabaseService } from './service/supabase.service';
import { AnimalsModule } from './basedata/animals/animals.module'; // Імпортуємо AnimalsModule

@Module({
  providers: [SupabaseService],
  exports: [SupabaseService],
  imports: [
    ConfigModule.forRoot(), // Завантажує .env файл для налаштувань
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env['DB_HOST'] || 'localhost',
      port: +process.env['DB_PORT'] || 5432,
      username: process.env['DB_USER'] || 'user',
      password: process.env['DB_PASS'] || 'password',
      database: process.env['DB_NAME'] || 'my_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    AuthorizationModule,
    AnimalsModule, // Додано
    // Додайте сюди інші модулі (volunteer, shelter, adoption_requests тощо)
  ],
  controllers: [],
})
export class AppModule {}
