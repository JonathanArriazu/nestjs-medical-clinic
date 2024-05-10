import { Module } from '@nestjs/common';
import { MedicalConsultationsService } from './medical_consultations.service';
import { MedicalConsultationsController } from './medical_consultations.controller';

@Module({
  controllers: [MedicalConsultationsController],
  providers: [MedicalConsultationsService],
})
export class MedicalConsultationsModule {}
