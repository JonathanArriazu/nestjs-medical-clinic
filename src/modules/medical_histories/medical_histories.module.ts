import { Module } from '@nestjs/common';
import { MedicalHistoriesService } from './medical_histories.service';
import { MedicalHistoriesController } from './medical_histories.controller';

@Module({
  controllers: [MedicalHistoriesController],
  providers: [MedicalHistoriesService],
})
export class MedicalHistoriesModule {}
