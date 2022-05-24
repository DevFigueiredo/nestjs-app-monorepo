import { NestFactory } from '@nestjs/core';
import { MsCustomersModule } from './ms_customers.module';

async function bootstrap() {
  const app = await NestFactory.create(MsCustomersModule);
  await app.listen(3000);
}
bootstrap();
