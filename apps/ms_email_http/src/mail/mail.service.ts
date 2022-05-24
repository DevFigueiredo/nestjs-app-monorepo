import { Injectable } from '@nestjs/common';
import { MailDto } from './dto/mail.dto';

@Injectable()
export class MailService {
  sendEmail(mailDto: MailDto): Promise<void> {
    return;
  }


}
