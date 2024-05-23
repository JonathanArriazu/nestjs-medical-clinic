import { IsNotEmpty, IsString } from "@nestjs/class-validator";

export class CreatePracticeDto {

    @IsNotEmpty()
    @IsString()
    duration: string;

    @IsNotEmpty()
    @IsString()
    complications: string;  

    @IsNotEmpty()
    @IsString()
    finalResult: string;

}
