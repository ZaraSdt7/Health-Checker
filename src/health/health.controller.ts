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

  @Post('system-status')
  getsystemStatus(): { [key: string]: boolean } {
    return HealthGuard.getsystemStatus();
  }

  @Post('troubleshoot')
  troubleshoot(): string {
    const systemStatus = HealthGuard.getsystemStatus();
    const failedStatus = Object.keys(systemStatus).filter(
      (key) => !systemStatus[key],
    );
    if (failedStatus.length > 0) {
      failedStatus.forEach((status) => {
        systemStatus[status] = true;
      });
      HealthGuard.setsystemStatus(systemStatus);
      return `Repaired status:${failedStatus.join(',')}`;
    } else {
      return 'All status healthy!';
    }
  }
}
