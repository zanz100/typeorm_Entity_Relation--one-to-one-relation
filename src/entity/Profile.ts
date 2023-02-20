import { Entity, PrimaryGeneratedColumn, Column, OneToOne, getRepository } from 'typeorm'
import { User } from './User_Ent';

@Entity()
export class ProfileEntity {
    @PrimaryGeneratedColumn()
    id: number


    @Column()
    gender:string

    @Column()
    photo:string

    @OneToOne(()=> User, user => user.Profile)
    User: User
}
