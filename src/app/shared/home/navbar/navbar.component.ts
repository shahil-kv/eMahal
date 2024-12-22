import { Component, OnInit } from '@angular/core';
import { Dialog } from 'primeng/dialog';
import { SigninComponent } from '../../../web-app/signin/signin.component';
@Component({
  selector: 'app-navbar',
  imports: [Dialog, SigninComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  protected isLoginPopupOpen = false;
  constructor() {}

  ngOnInit(): void {}

  login() {
    this.isLoginPopupOpen = true;
  }
}
