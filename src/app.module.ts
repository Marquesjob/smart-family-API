import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config'

import { 
  MonitoringModule,
  ExpenseModule,
  MembersModule,
  AuthModule
 } from './Modules';

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
    MembersModule,
    MonitoringModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 6432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [
        MembersEntity,
        ExpensesEntity,
        MonitoringEntity,
        PeriodEntity,
        StatusEntity
      ],
      //logging: true
    })
  ]
})
export class AppModule { }
