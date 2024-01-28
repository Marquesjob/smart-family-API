import { Controller, Get } from '@nestjs/common';
import { MonitoringService } from './monitoring.service';

@Controller()
export class MonitoringController {
  constructor(private readonly monitoringService: MonitoringService) {}

  @Get()
  getHello(): string {
    return this.monitoringService.getHello();
  }
}
