import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Post()
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctorsService.createDoctor(createDoctorDto);
  }

  @Get()
  findAll() {
    return this.doctorsService.findAllDoctors();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doctorsService.findOneDoctor(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDoctorDto: UpdateDoctorDto) {
    return this.doctorsService.updateDoctor(+id, updateDoctorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doctorsService.removeDoctor(+id);
  }
}
