import { Module } from '@nestjs/common';
import { DeseasesService } from './deseases.service';
import { DeseasesController } from './deseases.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Desease } from './entities/desease.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Desease])],
  controllers: [DeseasesController],
  providers: [DeseasesService],
})
export class DeseasesModule {}
