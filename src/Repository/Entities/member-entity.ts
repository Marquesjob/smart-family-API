import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { ExpensesEntity } from './expenses-entity';
import { MonitoringEntity } from './monitoring-entity';

@Entity("members", { schema: "family_expenses"})
export class MembersEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  login: string;

  @Column()
  password: string;

  @OneToMany(() => ExpensesEntity, expense => expense.member)
  expenses: ExpensesEntity[];

  @OneToMany(() => MonitoringEntity, monitoring => monitoring.member)
  monitoring: MonitoringEntity[];

}