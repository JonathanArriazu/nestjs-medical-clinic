import { Module } from '@nestjs/common';
import { MedicalEntriesService } from './medical_entries.service';
import { MedicalEntriesController } from './medical_entries.controller';

@Module({
  controllers: [MedicalEntriesController],
  providers: [MedicalEntriesService],
})
export class MedicalEntriesModule {}
