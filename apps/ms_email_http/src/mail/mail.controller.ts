import { Controller, Post, Body, HttpCode} from '@nestjs/common';
import { MailDto } from './dto/mail.dto';
import { MailService } from './mail.service';

@Controller('mail/send')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post()
  @HttpCode(200)
  async sendEmail(@Body() mailDto: MailDto) {
    await this.mailService.sendEmail(mailDto);
  }

}
