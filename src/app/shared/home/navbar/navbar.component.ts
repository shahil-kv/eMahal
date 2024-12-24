import { HttpClient } from '@angular/common/http';
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
  protected isMenuOpen = false;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe((data) => {
        console.log(data);
      });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  login() {
    this.isLoginPopupOpen = true;
  }
}
