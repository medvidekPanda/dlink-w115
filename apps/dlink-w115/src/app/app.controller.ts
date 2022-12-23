import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('status')
  getSocketStatus() {
    return this.appService.getSocketStatus();
  }

  @Get('toggle')
  toggleSocket() {
    return this.appService.toggleSocket();
  }
}
