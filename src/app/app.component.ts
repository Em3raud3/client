import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { webSocket } from 'rxjs/webSocket';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  message = 'hello';
  subject = webSocket('ws://localhost:8080');

  sendToServer($event: any) {
    console.log('sendToServer');
    this.subject.subscribe();
    this.subject.next(this.message);
    this.subject.complete();

  }
}
