import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config'
import { MailModule } from './mail/mail.module';

@Module({
  imports: [ConfigModule.forRoot(), MailModule],
  controllers: [],
  providers: [],
})
export class MsEmailHttpModule {}
