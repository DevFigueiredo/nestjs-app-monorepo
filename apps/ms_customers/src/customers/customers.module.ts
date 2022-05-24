import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { FirebaseService } from '@app/firebase_auth';

@Module({
  imports: [],
  controllers: [CustomersController],
  providers: [CustomersService, FirebaseService],
})
export class CustomersModule {}
