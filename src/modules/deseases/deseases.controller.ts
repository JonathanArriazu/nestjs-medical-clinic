import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeseasesService } from './deseases.service';
import { CreateDeseaseDto } from './dto/create-desease.dto';
import { UpdateDeseaseDto } from './dto/update-desease.dto';

@Controller('deseases')
export class DeseasesController {
  constructor(private readonly deseasesService: DeseasesService) {}

  @Post()
  create(@Body() createDeseaseDto: CreateDeseaseDto) {
    return this.deseasesService.create(createDeseaseDto);
  }

  @Get()
  findAll() {
    return this.deseasesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deseasesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeseaseDto: UpdateDeseaseDto) {
    return this.deseasesService.update(+id, updateDeseaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deseasesService.remove(+id);
  }
}
