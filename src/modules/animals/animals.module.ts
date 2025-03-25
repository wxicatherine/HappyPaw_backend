import { Module } from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { AnimalsController } from './animals.controller';
import { SupabaseService } from '../../service/supabase.service';

@Module({
  controllers: [AnimalsController],
  providers: [AnimalsService, SupabaseService],
})
export class AnimalsModule {}
