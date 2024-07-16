import { Body, Controller, Get, Post } from '@nestjs/common';
import { HealthGuard } from './heath.guard';

@Controller('health')
export class HealthController {
  @Get()
  getHealthStatus(): boolean {
    return HealthGuard.ishealth;
  }

  @Post()
  setHealthStatus(@Body('status') status: boolean): string {
    HealthGuard.setHealthStatus(status);
    return `Health status set to ${status}`;
  }
}
