import { BaseEntity } from "src/config/database/base.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Patient extends BaseEntity {

    @Column()
    Dni: number;

    @Column()
    name: string;  

    @Column()
    Last_name: string;

    @Column()
    Birthday_date: Date;

    @Column()
    Medical_insurance: string;

}
