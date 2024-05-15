import { BaseEntity } from "src/config/database/base.entity";
import { Doctor } from "src/modules/doctors/entities/doctor.entity";
import { MedicalConsultation } from "src/modules/medical_consultations/entities/medical_consultation.entity";
import { MedicalHistory } from "src/modules/medical_histories/entities/medical_history.entity";
import { Practice } from "src/modules/practices/entities/practice.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class MedicalEntry extends BaseEntity {

    @PrimaryGeneratedColumn()
    medicalEntryId: number;

    @Column()
    date: Date;

    @ManyToOne(() => MedicalHistory, medicalhistory => medicalhistory.MedicalEntry)
    @JoinColumn({ name: 'medicalhistoryId' })
    MedicalHistory: MedicalHistory;

    @ManyToOne(() => Doctor)
    @JoinColumn({ name: 'doctorId' })
    Doctor: Doctor;

    @OneToMany(() => MedicalConsultation, consultation => consultation.MedicalEntry)
    MedicalConsultations: MedicalConsultation[];

    @OneToMany(() => Practice, practice => practice.MedicalEntry)
    Practices: Practice[];


}
