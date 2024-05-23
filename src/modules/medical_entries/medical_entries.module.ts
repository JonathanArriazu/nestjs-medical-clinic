import { Module } from '@nestjs/common';
import { MedicalEntriesService } from './medical_entries.service';
import { MedicalEntriesController } from './medical_entries.controller';
import { MedicalEntry } from './entities/medical_entry.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalHistory } from '../medical_histories/entities/medical_history.entity';
import { Doctor } from '../doctors/entities/doctor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MedicalEntry, MedicalHistory, Doctor])],
  controllers: [MedicalEntriesController],
  providers: [MedicalEntriesService],
})
export class MedicalEntriesModule {}
