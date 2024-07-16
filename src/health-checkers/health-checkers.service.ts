import { Injectable } from '@nestjs/common';
import {
  HealthCheckService,
  HealthIndicator,
  HealthIndicatorResult,
} from '@nestjs/terminus';

@Injectable()
export class HealthService extends HealthIndicator {
  constructor(private health: HealthCheckService) {
    super();
  }
  async ishealthy(key: string): Promise<HealthIndicatorResult> {
    const ishealt = true;
    const result = this.getStatus(key, ishealt);
    return result;
  }
}
