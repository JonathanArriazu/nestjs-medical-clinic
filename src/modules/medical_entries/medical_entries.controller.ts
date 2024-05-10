import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicalEntriesService } from './medical_entries.service';
import { CreateMedicalEntryDto } from './dto/create-medical_entry.dto';
import { UpdateMedicalEntryDto } from './dto/update-medical_entry.dto';

@Controller('medical-entries')
export class MedicalEntriesController {
  constructor(private readonly medicalEntriesService: MedicalEntriesService) {}

  @Post()
  create(@Body() createMedicalEntryDto: CreateMedicalEntryDto) {
    return this.medicalEntriesService.create(createMedicalEntryDto);
  }

  @Get()
  findAll() {
    return this.medicalEntriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.medicalEntriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMedicalEntryDto: UpdateMedicalEntryDto) {
    return this.medicalEntriesService.update(+id, updateMedicalEntryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.medicalEntriesService.remove(+id);
  }
}
