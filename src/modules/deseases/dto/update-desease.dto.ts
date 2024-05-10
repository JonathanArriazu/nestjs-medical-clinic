import { PartialType } from '@nestjs/mapped-types';
import { CreateDeseaseDto } from './create-desease.dto';

export class UpdateDeseaseDto extends PartialType(CreateDeseaseDto) {}
