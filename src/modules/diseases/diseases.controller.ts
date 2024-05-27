import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { DiseasesService } from './diseases.service';
import { CreateDiseaseDto } from './dto/create-disease.dto';
import { UpdateDiseaseDto } from './dto/update-disease.dto';

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
