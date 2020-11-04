import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'PUSH-IT';
  pushForm: FormGroup;
  resp;
  constructor(private service: AppService, private fb: FormBuilder) {
    this.pushForm = this.fb.group({
      payload: this.fb.group({
        notification: this.fb.group({
          title: [''],
          body: [''],
          icon: [''],
        }),
      }),
      pushSubscription: this.fb.group({
        endpoint: [''],
        keys: this.fb.group({
          auth: [''],
          p256dh: [''],
        }),
      }),
      options: this.fb.group({
        vapidDetails: this.fb.group({
          subject: [''],
          privateKey: [''],
          publicKey: [''],
        }),
      }),
    });
  }

  send() {
    this.service
      .sendIt(this.pushForm.value)
      .subscribe(data => (this.resp = data));
  }
}
