import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMedicalHistoryDto } from './dto/create-medical_history.dto';
import { UpdateMedicalHistoryDto } from './dto/update-medical_history.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { MedicalHistory } from './entities/medical_history.entity';
import { Patient } from '../patients/entities/patient.entity';

@Injectable()
export class MedicalHistoriesService {
  constructor(
    @InjectRepository(MedicalHistory)
    private readonly medicalRepository: Repository<MedicalHistory>,
  ) {}

  public async findAllMedicalHistories(): Promise<MedicalHistory[]> {
    try {
      const medicalHistories: MedicalHistory[] = await this.medicalRepository.find({
        relations: ['patient', 'MedicalEntry']
      });
      if (medicalHistories.length === 0) {
        throw new HttpException('Failed to find result', HttpStatus.BAD_REQUEST);
      }
      return medicalHistories;
    } catch (error) {
      throw new HttpException('Failed to find medical histories', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async findOneMedicalHistory(id: number): Promise<MedicalHistory> {
    try {
      const medicalHistory: MedicalHistory = await this.medicalRepository.findOne({
        where: ({id}),
        relations: ['patient', 'MedicalEntry']
      })
      if (!medicalHistory) {
        throw new HttpException('Failed to find result', HttpStatus.BAD_REQUEST);
      }
      return medicalHistory;
    } catch (error) {
      throw new HttpException('Failed to find medical history', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async updateMedicalHistory(
    id: number,
    body: UpdateMedicalHistoryDto,
  ): Promise<UpdateResult> {
    try {
      const medicalHistory: UpdateResult = await this.medicalRepository.update(
        id,
        body,
      );
      if (medicalHistory.affected === 0) {
        throw new HttpException('Failed to find result', HttpStatus.BAD_REQUEST);
      }
      return medicalHistory;
    } catch (error) {
      throw new HttpException('Failed to update medical history', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async removeMedicalHistory(id: number): Promise<DeleteResult> {
    try {
      const medicalHistory: DeleteResult = await this.medicalRepository.delete(id);
      if (medicalHistory.affected === 0) {
        throw new HttpException('Failed to find result', HttpStatus.BAD_REQUEST);
      }
      return medicalHistory;
    } catch (error) {
      throw new HttpException('Failed to delete medical history', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
