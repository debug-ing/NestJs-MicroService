import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({
        nullable:false,
        length: 100
    })
    email:string;

    @Column({
        nullable:false,
        length: 100
    })
    password:string;

    @Column({
        nullable:false,
        length: 100
    })
    name:string;

    @Column({
        nullable:false,
        length: 100
    })
    lastName:string;

    @CreateDateColumn()
    createdAt: string

    @UpdateDateColumn()
    updatedAt: string
}