import { BaseEntity } from "src/config/database/base.entity";
import { MedicalEntry } from "src/modules/medical_entries/entities/medical_entry.entity";
import { Patient } from "src/modules/patients/entities/patient.entity";
import { Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";

@Entity()
export class MedicalHistory extends BaseEntity {

    @OneToOne(() => Patient)
    @JoinColumn({ name: 'patientId' })
        paciente: Patient;

    @OneToMany(() => MedicalEntry, entry => entry.MedicalHistory)
    MedicalEntry: MedicalEntry[];

}
