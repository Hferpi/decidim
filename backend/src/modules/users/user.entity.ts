
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum Roles {
  ADMIN = 'ADMIN',
  STUDENT = 'STUDENT',
  PARENTS = 'PARENTS',
  TEACHER = 'TEACHER',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id_user: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: Roles })
  rol: Roles;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
created_at: Date;

}