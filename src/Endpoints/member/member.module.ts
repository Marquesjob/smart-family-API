import { Module } from '@nestjs/common';
import { MemberController } from './member.controller';
import { MemberService } from './member.service';
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
  providers: [MemberService],
})
export class MemberModule {}
