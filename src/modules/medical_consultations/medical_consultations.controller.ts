import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicalConsultationsService } from './medical_consultations.service';
import { CreateMedicalConsultationDto } from './dto/create-medical_consultation.dto';
import { UpdateMedicalConsultationDto } from './dto/update-medical_consultation.dto';

@Controller('medical-consultations')
export class MedicalConsultationsController {
  constructor(private readonly medicalConsultationsService: MedicalConsultationsService) {}

  @Post()
  create(@Body() createMedicalConsultationDto: CreateMedicalConsultationDto) {
    return this.medicalConsultationsService.create(createMedicalConsultationDto);
  }

  @Get()
  findAll() {
    return this.medicalConsultationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalConsultationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicalConsultationDto: UpdateMedicalConsultationDto) {
    return this.medicalConsultationsService.update(+id, updateMedicalConsultationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalConsultationsService.remove(+id);
  }
}
