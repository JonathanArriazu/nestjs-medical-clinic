import { Injectable } from '@nestjs/common';
import { CreateDeseaseDto } from './dto/create-desease.dto';
import { UpdateDeseaseDto } from './dto/update-desease.dto';

@Injectable()
export class DeseasesService {
  create(createDeseaseDto: CreateDeseaseDto) {
    return 'This action adds a new desease';
  }

  findAll() {
    return `This action returns all deseases`;
  }

  findOne(id: number) {
    return `This action returns a #${id} desease`;
  }

  update(id: number, updateDeseaseDto: UpdateDeseaseDto) {
    return `This action updates a #${id} desease`;
  }

  remove(id: number) {
    return `This action removes a #${id} desease`;
  }
}
