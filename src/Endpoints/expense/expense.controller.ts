import { Controller, Get } from '@nestjs/common';
import { ExpenseService } from './expense.service';

@Controller()
export class ExpenseController {

  constructor(private readonly expenseService: ExpenseService) {}

  @Get()
  getHello(): string {
    return this.expenseService.getHello();
  }
}
