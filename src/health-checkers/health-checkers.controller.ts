import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';
import { DatabaseHealthIndicator } from './database-healthindicator';

@Controller('health-checkers')
export class HealthCheckersController {
  constructor(
    private health: HealthCheckService,
    private db: TypeOrmHealthIndicator,
    private customdb: DatabaseHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      async () => this.db.pingCheck('database'),
      async () => this.customdb.isHealthy('customDatabase'),
    ]);
  }
}
