import { Controller, Get, UseGuards } from '@nestjs/common';
import { HealthGuard } from './health/heath.guard';

@Controller()
export class AppController {
  @Get('protected')
  @UseGuards(HealthGuard)
  getProtectedRoutes() {
    return 'the routes is protected';
  }
}
