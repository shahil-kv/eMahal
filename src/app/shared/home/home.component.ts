import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { PrayerTimeComponent } from "./prayer-time/prayer-time.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, PrayerTimeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent { }
