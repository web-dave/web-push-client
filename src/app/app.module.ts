import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
/*
{
  "payload": {
    "notification": {
      "title": "Moin Push",
      "body": "New Post available!",
      "icon": "assets/icon-72x72.png"
    }
  },
  "pushSubscription": {
    "endpoint":
      "https://fcm.googleapis.com/fcm/send/ehKHz1N52L8:APA91bGvlfASew_Vqkx71J3LphGEbmRkuUCxFn1CbOoh5y6MXKJqWGsIHDLeFbvHiKc6MVb5nOCuy6nPPUpWKBzUBgrwyVGV8Q0q2SiWDgf6dtLtARCGkMETEuZkTo3TEUuonMw6yK9x",
    "keys": {
      "auth": "M-xrXM5bZSs6CTA1SJ2AoQ",
      "p256dh":
        "BNhdl-NYkgf6l-ssiDtSciqNQr3pZd1vpD9E5-LBOrjhlQC6db7CrMWEd7O9boNpPwqW77JMAnrXli8hyBftQxY"
    }
  },
"options":{
  "vapidDetails": {
    "subject": "https://webdave.de",
    "privateKey": "-0SpU1bmLnJx2_cddb39lq32xDmgbjGSvvvBxlasz0Y",
    "publicKey":
      "BBJjW-Pj7eihJThP8MErXTvjszIwu-owH2C0TeZbOWZmuUO9aWiIba6mDVa0NLQonLi-PLHt0BJ-cqw1N0lSQVM"
  }
}
}
//*/
