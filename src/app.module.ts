import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config'

import { 
  MonitoringModule,
  ExpenseModule,
  MemberModule
 } from './Endpoints';

import { 
  MembersEntity,
  ExpensesEntity,
  MonitoringEntity,
  PeriodEntity,
  StatusEntity
} from './Repository';

@Module({
  imports: [
    ExpenseModule,
    MemberModule,
    MonitoringModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 6432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [
        MembersEntity,
        ExpensesEntity,
        MonitoringEntity,
        PeriodEntity,
        StatusEntity
      ],
      logging: true
    }),
  ],
})
export class AppModule { }
