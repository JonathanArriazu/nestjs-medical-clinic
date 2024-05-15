import { BaseEntity } from "src/config/database/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Doctor extends BaseEntity {

    @PrimaryGeneratedColumn()
    doctorId: number;

    @Column()
    licenseNumber: number;

    @Column()
    name: string;  

    @Column()
    lastName: string;

    @Column()
    entryDate: Date;
}
