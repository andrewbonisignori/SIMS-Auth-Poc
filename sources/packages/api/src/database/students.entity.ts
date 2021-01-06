import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('students')
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 250 })
  firstName: string;

  @Column({ type: 'varchar', length: 250 })
  lastName: string;

  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Column({ type: 'date' })
  birthDate: Date;

  @Column({ default: true })
  isActive: boolean;
}
