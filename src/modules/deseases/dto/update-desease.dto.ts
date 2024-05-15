import { PartialType } from '@nestjs/mapped-types';
import { CreateDiseaseDto } from './create-desease.dto';

export class UpdateDiseaseDto extends PartialType(CreateDiseaseDto) {}
