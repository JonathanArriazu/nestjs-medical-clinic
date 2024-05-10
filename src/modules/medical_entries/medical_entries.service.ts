import { Injectable } from '@nestjs/common';
import { CreateMedicalEntryDto } from './dto/create-medical_entry.dto';
import { UpdateMedicalEntryDto } from './dto/update-medical_entry.dto';

@Injectable()
export class MedicalEntriesService {
  create(createMedicalEntryDto: CreateMedicalEntryDto) {
    return 'This action adds a new medicalEntry';
  }

  findAll() {
    return `This action returns all medicalEntries`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicalEntry`;
  }

  update(id: number, updateMedicalEntryDto: UpdateMedicalEntryDto) {
    return `This action updates a #${id} medicalEntry`;
  }

  remove(id: number) {
    return `This action removes a #${id} medicalEntry`;
  }
}
