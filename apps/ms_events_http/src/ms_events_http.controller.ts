import { Controller, Get } from '@nestjs/common';
import { MsEventsHttpService } from './ms_events_http.service';

@Controller()
export class MsEventsHttpController {
  constructor(private readonly msEventsHttpService: MsEventsHttpService) {}

  @Get()
  getHello(): string {
    return this.msEventsHttpService.getHello();
  }
}
