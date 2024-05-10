import { BaseEntity } from "src/config/database/base.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Doctor extends BaseEntity {

    @Column()
    License_number: number;

    @Column()
    Name: string;  

    @Column()
    Last_name: string;

    @Column()
    Entry_date: Date;
}
