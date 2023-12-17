import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { MembersEntity } from './member-entity';
import { PeriodEntity } from './period-entity';
import { StatusEntity } from './status-entity';

@Entity()
@Entity("monitoring", { schema: "family_expenses"})
export class MonitoringEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  avaible: number;

  @Column()
  surplus_current_period: number;

  @Column()
  surplus_previous_period: number;

  @Column()
  total: number;

  @Column()
  total_expenses: number;

  @Column()
  total_expenses_paid: number;

  @Column()
  period_id: number;

  @Column()
  status_id: number;

  @Column()
  member_id: number

  @ManyToOne(() => PeriodEntity, period => period.monitoring)
  @JoinColumn([{ name: "period_id", referencedColumnName: "id" }])
  period: PeriodEntity;

  @ManyToOne(() => StatusEntity, status => status.monitoring)
  @JoinColumn([{ name: "status_id", referencedColumnName: "id" }])
  status: StatusEntity;

  @ManyToOne(() => MembersEntity, member => member.monitoring)
  @JoinColumn([{ name: "member_id", referencedColumnName: "id" }])
  member: MembersEntity;
}
