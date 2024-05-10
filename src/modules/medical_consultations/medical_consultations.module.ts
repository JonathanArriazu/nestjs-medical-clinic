import { Module } from '@nestjs/common';
import { MedicalConsultationsService } from './medical_consultations.service';
import { MedicalConsultationsController } from './medical_consultations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalConsultation } from './entities/medical_consultation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MedicalConsultation])],
  controllers: [MedicalConsultationsController],
  providers: [MedicalConsultationsService],
})
export class MedicalConsultationsModule {}
