import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMedicalEntryDto } from './dto/create-medical_entry.dto';
import { UpdateMedicalEntryDto } from './dto/update-medical_entry.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MedicalEntry } from './entities/medical_entry.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { MedicalHistory } from '../medical_histories/entities/medical_history.entity';
import { Doctor } from '../doctors/entities/doctor.entity';

@Injectable()
export class MedicalEntriesService {
  constructor(
    @InjectRepository(MedicalEntry)
    private readonly medicalEntryRepository: Repository<MedicalEntry>,
    @InjectRepository(MedicalHistory)
    private readonly medicalHistoryRepository: Repository<MedicalHistory>,
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>
  ) {}

  async createMedicalEntry(body: CreateMedicalEntryDto): Promise<MedicalEntry> {
    try {
    const { date, medicalHistoryId, doctorId } = body;
    const medicalHistory = await this.medicalHistoryRepository.findOne({ where: { id: medicalHistoryId } });
    const doctor = await this.doctorRepository.findOne({ where: { id: doctorId } });

  
    if (!medicalHistory || !doctor) {
      throw new HttpException('Medical history or doctor not found', HttpStatus.NOT_FOUND);
    }
  
    const newMedicalEntry = this.medicalEntryRepository.create({
      date,
      medicalHistory: medicalHistory,
      Doctor: doctor,
    })
  
      return await this.medicalEntryRepository.save(newMedicalEntry);
    } catch (error) {
      throw new HttpException('Failed to create medical entry', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAllMedicalEntries(): Promise<MedicalEntry[]> {
    try {
      const medicalEntries: MedicalEntry[] = await this.medicalEntryRepository
        .createQueryBuilder('medicalEntry')
        .leftJoinAndSelect('medicalEntry.Doctor', 'Doctor')
        .leftJoinAndSelect('medicalEntry.Practices', 'Practices')
        .leftJoinAndSelect('medicalEntry.MedicalConsultations', 'MedicalConsultations')
        .leftJoinAndSelect('MedicalConsultations.Disease', 'Disease')
        .getMany();

      medicalEntries.forEach(medicalEntry => {
        if (medicalEntry.Practices && medicalEntry.Practices.length === 0) {
          delete medicalEntry.Practices;
        }
        if (medicalEntry.MedicalConsultations && medicalEntry.MedicalConsultations.length === 0) {
          delete medicalEntry.MedicalConsultations;
        }
      });

      return medicalEntries;
    } catch (error) {
      throw new HttpException('Failed to find medical entries', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOneMedicalEntry(id: number): Promise<MedicalEntry> {
    try {
      const medicalEntry: MedicalEntry = await this.medicalEntryRepository
        .createQueryBuilder('medicalEntry')
        .leftJoinAndSelect('medicalEntry.Doctor', 'Doctor')
        .leftJoinAndSelect('medicalEntry.Practices', 'Practices')
        .leftJoinAndSelect('medicalEntry.MedicalConsultations', 'MedicalConsultations')        
        .leftJoinAndSelect('MedicalConsultations.Disease', 'Disease')
        .where('medicalEntry.id = :id', { id })
        .getOne();

      if (!medicalEntry) {
        throw new HttpException('Failed to find result', HttpStatus.BAD_REQUEST);
      }

      if (medicalEntry.Practices && medicalEntry.Practices.length === 0) {
        delete medicalEntry.Practices;
      }

      if (medicalEntry.MedicalConsultations && medicalEntry.MedicalConsultations.length === 0) {
        delete medicalEntry.MedicalConsultations;
      }

      return medicalEntry;
    } catch (error) {
      throw new HttpException('Failed to find medical entry', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async updateMedicalEntry(
    id: number,
    body: UpdateMedicalEntryDto,
  ): Promise<UpdateResult> {
    try {
      const { medicalHistoryId, doctorId } = body;
      const medicalEntry = await this.medicalEntryRepository.findOne({ where: { id: medicalHistoryId } });
      const doctor = await this.doctorRepository.findOne({ where: { id: doctorId } });
  
      if (!medicalEntry) {
        throw new Error('Medical entry not found');
      }
  
      if (!doctor) {
        throw new Error('Doctor not found');
      }
      
      return await this.medicalEntryRepository.update(id, {Doctor: doctor});
    }
    catch (error) {
      throw new HttpException('Failed to update medical entry', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async removeMedicalEntry(id: number): Promise<DeleteResult> {
    try {
      const medicalEntry: DeleteResult = await this.medicalEntryRepository.delete(id);
      if (medicalEntry.affected === 0) {
        throw new HttpException('Failed to find result', HttpStatus.BAD_REQUEST);
      }
      return medicalEntry;
    } catch (error) {
      throw new HttpException('Failed to delete medical entry', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
