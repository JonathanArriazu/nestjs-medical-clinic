import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MedicalEntriesService } from './medical_entries.service';
import { CreateMedicalEntryDto } from './dto/create-medical_entry.dto';
import { UpdateMedicalEntryDto } from './dto/update-medical_entry.dto';
import { MedicalEntry } from './entities/medical_entry.entity';

@Controller('medical-entries')
export class MedicalEntriesController {
  constructor(private readonly medicalEntriesService: MedicalEntriesService) {}

  @Post('')
  async createMedicalEntry(@Body() body: CreateMedicalEntryDto): Promise<MedicalEntry> {
    return await this.medicalEntriesService.createMedicalEntry(body);
  }

  @Get('')
  findAllMedicalEntries() {
    return this.medicalEntriesService.findAllMedicalEntries();
  }

  @Get(':id')
  findOneMedicalEntry(@Param('id') id: string) {
    return this.medicalEntriesService.findOneMedicalEntry(+id);
  }

  @Patch(':id')
  updateMedicalEntry(@Param('id') id: string, @Body() body: UpdateMedicalEntryDto) {
    return this.medicalEntriesService.updateMedicalEntry(+id, body);
  }

  @Delete(':id')
  removeMedicalEntry(@Param('id') id: string) {
    return this.medicalEntriesService.removeMedicalEntry(+id);
  }
}
