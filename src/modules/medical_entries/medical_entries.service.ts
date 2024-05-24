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
    const { date, medicalHistoryId, doctorId } = body;
    const medicalHistory = await this.medicalHistoryRepository.findOne({ where: { id: medicalHistoryId } });
    const doctor = await this.doctorRepository.findOne({ where: { id: doctorId } });

  
    if (!medicalHistory || !doctor) {
      throw new HttpException('Medical history or doctor not found', HttpStatus.NOT_FOUND);
    }
  
    // Crear una nueva instancia de MedicalEntry
    const newMedicalEntry = new MedicalEntry();
    newMedicalEntry.date = date;
    newMedicalEntry.MedicalHistory = medicalHistory;
    newMedicalEntry.Doctor = doctor;
  
    try {
      // Guardar la nueva entrada mÃ©dica
      return await this.medicalEntryRepository.save(newMedicalEntry);
    } catch (error) {
      throw new HttpException('Failed to create medical entry', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async findAllMedicalEntries(): Promise<MedicalEntry[]> {
    try {
      const medicalEntries: MedicalEntry[] = await this.medicalEntryRepository.find({
        relations: ['Doctor']
      });
      if (medicalEntries.length === 0) {
        throw new HttpException('Failed to find result', HttpStatus.BAD_REQUEST);
      }
      return medicalEntries;
    } catch (error) {
      throw new HttpException('Failed to find medical histories', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async findOneMedicalEntry(id: number): Promise<MedicalEntry> {
    try {
      const medicalEntry: MedicalEntry = await this.medicalEntryRepository.findOne({
        where: [{id}],
        relations: ['Doctor']
      })
      if (!medicalEntry) {
        throw new HttpException('Failed to find result', HttpStatus.BAD_REQUEST);
      }
      return medicalEntry;
    } catch (error) {
      throw new HttpException('Failed to find medical history', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async updateMedicalEntry(
    id: number,
    body: UpdateMedicalEntryDto,
  ): Promise<UpdateResult> {
    try {
      const medicalEntry: UpdateResult = await this.medicalEntryRepository.update(
        id,
        body,
      );
      if (medicalEntry.affected === 0) {
        throw new HttpException('Failed to find result', HttpStatus.BAD_REQUEST);
      }
      return medicalEntry;
    } catch (error) {
      throw new HttpException('Failed to update medical history', HttpStatus.INTERNAL_SERVER_ERROR);
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
      throw new HttpException('Failed to delete medical history', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
