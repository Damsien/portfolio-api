import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger } from '@nestjs/common';
import { SendMailDto } from './dto/send-mail.dto';

@Injectable()
export class AppService {
  
  constructor(private readonly mailerService: MailerService) {}

  getStatus() {
    return {
      status: process.env.STATUS
    };
  }

  sendMail(sendMail) {
    console.log(sendMail)
    this.mailerService
      .sendMail({
        to: 'dassieu.damien@gmail.com', // list of receivers
        from: 'no-reply@gmail.com', // sender address
        subject: `Contact request - ${sendMail.name}`, // Subject line
        html: `<h2>From ${sendMail.email}</h2><br /><p>${sendMail.message}</p>`, // HTML body content
      })
      .then(() => {})
      .catch((err) => {Logger.debug(err)});
  }
}
