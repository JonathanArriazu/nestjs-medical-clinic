import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MedicalHistoriesService } from './medical_histories.service';
import { CreateMedicalHistoryDto } from './dto/create-medical_history.dto';
import { UpdateMedicalHistoryDto } from './dto/update-medical_history.dto';

@Controller('medical-histories')
export class MedicalHistoriesController {
  constructor(private readonly medicalHistoriesService: MedicalHistoriesService) {}

  @Get()
  findAll(
    @Query('withPractices') withPractices?: boolean,
    @Query('withMedicalConsultations') withMedicalConsultations?: boolean,
  ) {
    return this.medicalHistoriesService.findAllMedicalHistories(withPractices, withMedicalConsultations);
  }

  @Get(':id')
  findOne(
    @Param('id') id: number,
    @Query('withPractices') withPractices?: boolean,
    @Query('withMedicalConsultations') withMedicalConsultations?: boolean,
  ) {
    return this.medicalHistoriesService.findOneMedicalHistory(id, withPractices, withMedicalConsultations);
  }

  @Patch(':id')
  updateMedicalHistory(@Param('id') id: string, @Body() body: UpdateMedicalHistoryDto) {
    return this.medicalHistoriesService.updateMedicalHistory(+id, body);
  }

  @Delete(':id')
  removeMedicalHistory(@Param('id') id: string) {
    return this.medicalHistoriesService.removeMedicalHistory(+id);
  }
}
