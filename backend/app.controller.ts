import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MsgDto } from './Msg.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post()
  sendMsg(@Body() msgDto: MsgDto) {
    return this.appService.setNotification(msgDto);
  }
}
