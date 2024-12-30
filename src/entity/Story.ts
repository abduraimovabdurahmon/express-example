import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Story{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    content!: string;
}