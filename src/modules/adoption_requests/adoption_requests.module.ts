//adoption_requests.module.ts
import { Module } from '@nestjs/common';
import { AdoptionRequestsController } from './adoption_requests.controller';
import { AdoptionRequestsService } from './adoption_requests.service';

@Module({
  controllers: [AdoptionRequestsController],
  providers: [AdoptionRequestsService]
})
export class AdoptionRequestsModule {}
