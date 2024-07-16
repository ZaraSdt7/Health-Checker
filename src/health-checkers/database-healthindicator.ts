import { Injectable } from '@nestjs/common';
import {
  HealthCheckError,
  HealthIndicator,
  HealthIndicatorResult,
} from '@nestjs/terminus';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseHealthIndicator extends HealthIndicator {
  constructor(private readonly datasource: DataSource) {
    super();
  }
  async isHealthy(key: string): Promise<HealthIndicatorResult> {
    const ishealth = this.datasource.isInitialized;
    const result = this.getStatus(key, ishealth);
    if (ishealth) {
      return result;
    }
    throw new HealthCheckError('database check is faild', result);
  }
}
