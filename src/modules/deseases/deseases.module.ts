import { Module } from '@nestjs/common';
import { DiseasesService } from './deseases.service';
import { DiseasesController } from './deseases.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Disease } from './entities/desease.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Disease])],
  controllers: [DiseasesController],
  providers: [DiseasesService],
})
export class DiseasesModule {}
