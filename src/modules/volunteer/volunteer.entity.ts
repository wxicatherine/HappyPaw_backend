// src/app/basedata/volunteer/volunteer.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Authorization } from '../authorization/authorization.entity';

@Entity()
export class Volunteer {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;  // Ім'я волонтера

  @Column()
  lastName!: string;   // Прізвище волонтера

  @Column({ unique: true })
  email!: string;      // Електронна пошта для зв'язку та унікальна ідентифікація

  @Column({ nullable: true })
  phone!: string;      // Номер телефону (необов'язково)

  @Column({ nullable: true, type: 'text' })
  bio!: string;        // Коротка інформація про волонтера

  // Якщо один волонтер може мати декілька записів авторизації (наприклад, при реєстрації через різні платформи)
  @OneToMany(() => Authorization, (auth) => auth.volunteer)
  authorizations!: Authorization[];
}
