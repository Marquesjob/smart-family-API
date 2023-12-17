import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MonitoringEntity } from './monitoring-entity';


@Entity("status", { schema: "family_expenses"})
export class StatusEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => MonitoringEntity, monitoring => monitoring.status)
  monitoring: MonitoringEntity[];
}
