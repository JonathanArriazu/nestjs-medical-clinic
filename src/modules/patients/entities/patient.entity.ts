import { BaseEntity } from "src/config/database/base.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Patient extends BaseEntity {

    @Column()
    dni: number;

    @Column()
    name: string;  

    @Column()
    lastName: string;

    @Column()
    birthdayDate: Date;

    @Column()
    medicalInsurance: string;

}
