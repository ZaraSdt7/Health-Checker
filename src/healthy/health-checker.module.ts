import { Module } from '@nestjs/common';

import { HealthCheckerController } from './health-checker.controller';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TerminusModule, HttpModule],
  providers: [HealthCheckerController],
})
export class HealthCheckerModule {}
