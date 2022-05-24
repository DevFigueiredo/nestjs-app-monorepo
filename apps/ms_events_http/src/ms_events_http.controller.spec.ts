import { Test, TestingModule } from '@nestjs/testing';
import { MsEventsHttpController } from './ms_events_http.controller';
import { MsEventsHttpService } from './ms_events_http.service';

describe('MsEventsHttpController', () => {
  let msEventsHttpController: MsEventsHttpController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MsEventsHttpController],
      providers: [MsEventsHttpService],
    }).compile();

    msEventsHttpController = app.get<MsEventsHttpController>(MsEventsHttpController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(msEventsHttpController.getHello()).toBe('Hello World!');
    });
  });
});
