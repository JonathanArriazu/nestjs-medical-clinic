import { BaseEntity } from "src/config/database/base.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class MedicalConsultation extends BaseEntity{
    @Column()
    Consultation_reason: string;

    @Column()
    Is_confirmed: boolean;
}
