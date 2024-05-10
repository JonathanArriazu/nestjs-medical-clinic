import { BaseEntity } from "src/config/database/base.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class MedicalEntry extends BaseEntity {

    @Column()
    Date: Date;

}
