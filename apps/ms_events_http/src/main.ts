import { NestFactory } from '@nestjs/core';
import { MsEventsHttpModule } from './ms_events_http.module';

async function bootstrap() {
  const app = await NestFactory.create(MsEventsHttpModule);
  await app.listen(3000);
}
bootstrap();
