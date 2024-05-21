import { Injectable } from '@nestjs/common';
import { CreateDiseaseDto } from './dto/create-disease.dto';
import { UpdateDiseaseDto } from './dto/update-disease.dto';

@Injectable()
export class DiseasesService {
  create(createDiseaseDto: CreateDiseaseDto) {
    return 'This action adds a new desease';
  }

  findAll() {
    return `This action returns all deseases`;
  }

  findOne(id: number) {
    return `This action returns a #${id} desease`;
  }

  update(id: number, updateDiseaseDto: UpdateDiseaseDto) {
    return `This action updates a #${id} desease`;
  }

  remove(id: number) {
    return `This action removes a #${id} desease`;
  }
}
