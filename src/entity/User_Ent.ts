import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { ProfileEntity } from './Profile';



@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number
    @OneToOne( ()=> ProfileEntity, profile => profile.User, {
        cascade: true
    })
    @JoinColumn()
    Profile: ProfileEntity

}
