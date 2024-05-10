import { BaseEntity } from "src/config/database/base.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Desease extends BaseEntity{

    @Column()
    name: string;

}
