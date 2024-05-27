import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { DiseasesService } from './diseases.service';
import { CreateDiseaseDto } from './dto/create-disease.dto';
import { UpdateDiseaseDto } from './dto/update-disease.dto';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/role/role.guard';
import { Roles } from '../auth/roles/roles.decorator';
import { Role } from 'src/enums/role.enum';

@Controller('diseases')
export class DiseasesController {
  constructor(private readonly diseasesService: DiseasesService) {}

  @Post()
  create(@Body() createDiseaseDto: CreateDiseaseDto) {
    return this.diseasesService.createDisease(createDiseaseDto);
  }

  @Get()
  findAll(@Query('text') text?: string) {
    if(text) {
    return this.diseasesService.findAllDiseases(text);
    }
    
    return this.diseasesService.findAllDiseases();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diseasesService.findOneDisease(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiseaseDto: UpdateDiseaseDto) {
    return this.diseasesService.updateDisease(+id, updateDiseaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diseasesService.removeDisease(+id);
  }
}
