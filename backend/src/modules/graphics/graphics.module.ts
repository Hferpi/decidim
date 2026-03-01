import { Module } from '@nestjs/common';
import { GraphicsService } from './graphics.service';
import { GraphicsController } from './graphics.controller';

@Module({
  providers: [GraphicsService],
  controllers: [GraphicsController]
})
export class GraphicsModule {}
