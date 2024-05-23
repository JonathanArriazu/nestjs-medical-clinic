import { IsNotEmpty, IsString } from "@nestjs/class-validator";

export class CreateMedicalConsultationDto {

    @IsNotEmpty()
    @IsString()
    consultationReason: string;

    @IsNotEmpty()
    @IsString()
    isConfirmed: boolean;

}
