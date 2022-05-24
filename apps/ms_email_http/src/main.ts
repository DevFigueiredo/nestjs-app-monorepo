import { NestFactory } from '@nestjs/core';
import { MsEmailHttpModule } from './ms_email_http.module';

async function bootstrap() {
  const app = await NestFactory.create(MsEmailHttpModule);
  await app.listen(3000);
}
bootstrap();
