
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Roles, VocationalFiel } from '../types/user'


@Entity( {name: 'users'})
export class User {
  @PrimaryGeneratedColumn()
  id_user: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  classroom: string;

  @Column({ type: 'enum', enum: ['H', 'M'], nullable: true })
  sex?: 'H' | 'M';

  @Column({ nullable: true })
  img?: string;

  @Column()
  nie: string;

  @Column({ type: 'enum', enum: VocationalFiel, nullable: true })
  vocational_field?: VocationalFiel;

  @Column({ type: 'enum', enum: Roles })
  rol: Roles;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

}