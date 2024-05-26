import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from './entities/patient.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { MedicalHistory } from '../medical_histories/entities/medical_history.entity';
import { MedicalEntry } from '../medical_entries/entities/medical_entry.entity';

@Injectable()
export class PatientsService {

  constructor(
    @InjectRepository(Patient)
    private readonly patientRepository: Repository<Patient>,
    @InjectRepository(MedicalHistory)
    private readonly medicalHistoryRepository: Repository<MedicalHistory>,
    @InjectRepository(MedicalEntry)
    private readonly medicalEntryRepository: Repository<MedicalEntry>,
  ) {}

  async createPatient(body: CreatePatientDto): Promise<Patient> {
    try {
      const medicalHistory = this.medicalHistoryRepository.create();

      const patient = this.patientRepository.create({
        ...body,
        medicalHistory,
      });

      const savedPatient = await this.patientRepository.save(patient);
      if (!savedPatient) {
        throw new Error('No se encontró resultado');
      }

      return savedPatient;
    } catch (error) {
      throw new HttpException('Failed to create patient', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async findAllPatients(): Promise<Patient[]> {
    try {
      const patients: Patient[] = await this.patientRepository.find(
        {
          relations: ['medicalHistory']
        }
      );
      if (patients.length === 0) {
        throw new HttpException('Failed to find result', HttpStatus.BAD_REQUEST);
      }
      return patients;
    } catch (error) {
      throw new HttpException('Failed to find patients', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async findOnePatient(id: number): Promise<Patient> {
    try {
      const patient: Patient = await this.patientRepository.findOne(
        {
          where: { id },
          relations: ['medicalHistory'],
        }
      );
      if (!patient) {
        throw new HttpException('Failed to find result', HttpStatus.BAD_REQUEST);
      }
      return patient;
    } catch (error) {
      throw new HttpException('Failed to find patient', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async updatePatient(
    id: number,
    body: UpdatePatientDto,
  ): Promise<UpdateResult> {
    try {
      const patient: UpdateResult = await this.patientRepository.update(
        id,
        body,
      );
      if (patient.affected === 0) {
        throw new HttpException('Failed to find result', HttpStatus.BAD_REQUEST);
      }
      
      return patient;
    } catch (error) {
      throw new HttpException('Failed to update patient', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async removePatient(id: number): Promise<DeleteResult> {
    try {
      const patient: DeleteResult = await this.patientRepository.softDelete(id);
      await this.patientRepository.update(id, { isDeleted: true });
      if (patient.affected === 0) {
        throw new HttpException('Failed to find result', HttpStatus.BAD_REQUEST);
      }
      return patient;
    } catch (error) {
      throw new HttpException('Failed to delete patient', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
