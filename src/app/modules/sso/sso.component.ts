import { Component } from '@angular/core';

@Component({
  templateUrl: './sso.component.html',
  styleUrls: ['./sso.component.css']
})
export class SSOComponent {
  public user: string;
  public password: string;

  constructor() {}

  signIn() {
    console.log(this.user, ':', this.password);
  }
}
