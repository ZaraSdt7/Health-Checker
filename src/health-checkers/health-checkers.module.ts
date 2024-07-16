import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthService } from './health-checkers.service';
import { HealthCheckersController } from './health-checkers.controller';
import { DatabaseHealthIndicator } from './database-healthindicator';

@Module({
  imports: [
    TerminusModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'tests',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [HealthCheckersController],
  providers: [HealthService, DatabaseHealthIndicator],
})
export class HealthCheckersModule {}
