import { Request, Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SendMail } from './dto/send-mail.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/status')
  @HttpCode(200)
  getStatus() {
    return this.appService.getStatus();
  }

  @Post('/send')
  @HttpCode(201)
  sendMail(@Request() req, @Body() sendMail: SendMail) {
    return this.appService.sendMail(sendMail);
  }
}
