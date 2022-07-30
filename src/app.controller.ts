import { Controller, Get } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUnlimited(): string {
    return this.appService.getUnlimited();
  }

  @Throttle(5, 10)
  @Get('/limited')
  getLimited(): string {
    return this.appService.getLimited();
  }
}
