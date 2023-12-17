import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { MembersEntity } from './member-entity';
import { PeriodEntity } from './period-entity';

@Entity("expenses", { schema: "family_expenses"})
export class ExpensesEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  value: string;

  @Column()
  paid: boolean;

  @Column()
  period_id: number;

  @Column()
  member_id: number;

  @ManyToOne(() => PeriodEntity, period => period.expenses)
  @JoinColumn([{ name: "period_id", referencedColumnName: "id" }])
  period: PeriodEntity;

  @ManyToOne(() => MembersEntity, member => member.expenses)
  @JoinColumn([{ name: "member_id", referencedColumnName: "id" }])
  member: MembersEntity;
    
}