import { Injectable } from '@nestjs/common';
import { MsgDto } from './Msg.dto';

@Injectable()
export class AppService {
  push;
  constructor() {
    import('web-push').then(d => (this.push = d));
  }
  getHello(): string {
    console.log(this.push.generateVAPIDKeys());
    return this.push.generateVAPIDKeys();
  }

  setNotification(data: MsgDto) {
    return this.push.sendNotification(
      data.pushSubscription,
      JSON.stringify(data.payload),
      data.options,
    );
    // return data.pushSubscription.endpoint;
  }
}
