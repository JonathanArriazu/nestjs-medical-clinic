import { Module } from '@nestjs/common';
import { DeseasesService } from './deseases.service';
import { DeseasesController } from './deseases.controller';

@Module({
  controllers: [DeseasesController],
  providers: [DeseasesService],
})
export class DeseasesModule {}
