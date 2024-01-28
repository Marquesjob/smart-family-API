import { Module } from '@nestjs/common';
import { ExpenseController } from './expense.controller';
import { ExpenseService } from './expense.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExpensesEntity } from 'src/Repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ExpensesEntity])
  ],
  controllers: [ExpenseController],
  providers: [ExpenseService],
})
export class ExpenseModule {}
