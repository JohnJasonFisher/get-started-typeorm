import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Card } from "./Card";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @OneToMany(type => Card, card => card.user)
    cards: Card[];

}