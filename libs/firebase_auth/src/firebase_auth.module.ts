import { Module } from '@nestjs/common';
import { FirebaseService } from './firebase_auth.service';

@Module({
  providers: [FirebaseService],
  exports: [FirebaseService],
})
export class FirebaseAuthModule {}
