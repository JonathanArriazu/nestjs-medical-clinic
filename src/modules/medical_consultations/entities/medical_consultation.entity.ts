import { BaseEntity } from "src/config/database/base.entity";
import { Disease } from "src/modules/deseases/entities/desease.entity";
import { MedicalEntry } from "src/modules/medical_entries/entities/medical_entry.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MedicalConsultation extends BaseEntity{
    @PrimaryGeneratedColumn()
    medicalConsultationId: number;

    @Column()
    consultationReason: string;

    @Column()
    isConfirmed: boolean;

    @ManyToOne(() => MedicalEntry, entry => entry.MedicalConsultations)
    @JoinColumn({ name: 'medicalEntryId' })
    MedicalEntry: MedicalEntry;

    @ManyToOne(() => Disease, disease => disease.MedicalConsultation)
    Disease: Disease;
}
