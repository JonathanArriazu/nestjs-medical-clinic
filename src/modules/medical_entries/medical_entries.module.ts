import { Module } from '@nestjs/common';
import { MedicalEntriesService } from './medical_entries.service';
import { MedicalEntriesController } from './medical_entries.controller';
import { MedicalEntry } from './entities/medical_entry.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MedicalEntry])],
  controllers: [MedicalEntriesController],
  providers: [MedicalEntriesService],
})
export class MedicalEntriesModule {}
