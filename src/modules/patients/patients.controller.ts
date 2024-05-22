import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Post('')
  createPatient(@Body() body: CreatePatientDto) {
    return this.patientsService.createPatient(body);
  }

  @Get('')
  findAllPatients() {
    return this.patientsService.findAllPatients();
  }

  @Get(':id')
  findOnePatient(@Param('id') id: string) {
    return this.patientsService.findOnePatient(+id);
  }

  @Patch(':id')
  updatePatient(@Param('id') id: string, @Body() body: UpdatePatientDto) {
    return this.patientsService.updatePatient(+id, body);
  }

  @Delete(':id')
  removePatient(@Param('id') id: string) {
    return this.patientsService.removePatient(+id);
  }
}
