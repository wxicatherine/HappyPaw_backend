import { Module } from '@nestjs/common';
import { WalkRequestController } from './walk_request.controller';
import { WalkRequestService } from './walk_request.service';

@Module({
  controllers: [WalkRequestController],
  providers: [WalkRequestService]
})
export class WalkRequestModule {}
