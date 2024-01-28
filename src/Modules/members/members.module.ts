import { Module } from '@nestjs/common';
import { MemberController } from './controllers/members.controller';
import { MembersService } from './services/members.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpensesEntity, MembersEntity, MonitoringEntity, PeriodEntity, StatusEntity } from 'src/Repository';

@Module({
  imports: [TypeOrmModule.forFeature([
    MembersEntity,
    StatusEntity,
    PeriodEntity,
    MonitoringEntity,
    ExpensesEntity
  ])],
  controllers: [MemberController],
  providers: [MembersService],
  exports: [MembersService]
})
export class MembersModule { }
