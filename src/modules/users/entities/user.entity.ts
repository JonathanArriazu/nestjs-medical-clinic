import { BaseEntity } from "src/config/database/base.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    userId: number;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;
}
