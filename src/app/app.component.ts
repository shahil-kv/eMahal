import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-root',
  imports: [CommonModule, ButtonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'eMahal';
  appversion: string = environment.appVersion;

  ngOnInit(): void {}
}
