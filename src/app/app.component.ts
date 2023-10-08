import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayPassword : boolean = false;
  timestamps : any = [];

  onDisplayDetailsClick() {
  this.displayPassword = !this.displayPassword;
  this.timestamps.push(this.timestamps.length+1);
  }
  }
