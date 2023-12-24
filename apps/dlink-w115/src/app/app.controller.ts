import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('status')
  getSocketStatus() {
    return this.appService.getSocketStatus();
  }

  @Get('on')
  switchOn() {
    return this.appService.switchOn();
  }

  @Get('off')
  switchOf() {
    return this.appService.switchOff();
  }

  @Get('toggle')
  toggleSocket() {
    return this.appService.toggleSocket();
  }
}
