import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { TerminusModule } from '@nestjs/terminus';
import { HealthGuard } from './heath.guard';

@Module({
  imports: [TerminusModule],
  controllers: [HealthController],
  providers: [HealthGuard],
})
export class HealthModule {}
