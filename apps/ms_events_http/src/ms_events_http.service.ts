import { Injectable } from '@nestjs/common';

@Injectable()
export class MsEventsHttpService {
  getHello(): string {
    return 'Hello World!';
  }
}
