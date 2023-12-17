import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ExpensesEntity } from './expenses-entity';
import { MonitoringEntity } from './monitoring-entity';


@Entity()
@Entity("period", { schema: "family_expenses"})
export class PeriodEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  start_at: Date;

  @Column()
  end_at: Date;

  @OneToMany(() => ExpensesEntity, expense => expense.period)
  expenses: ExpensesEntity[];

  @OneToMany(() => MonitoringEntity, monitoring => monitoring.period)
  monitoring: MonitoringEntity[];
  
}
