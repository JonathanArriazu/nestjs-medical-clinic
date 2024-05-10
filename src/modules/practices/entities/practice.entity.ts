import { BaseEntity } from "src/config/database/base.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class Practice extends BaseEntity {
    @Column()
    Duration: string;

    @Column()
    Complications: string;  

    @Column()
    Final_result: string;
}
