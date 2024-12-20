import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { PrayerTimeComponent } from "./prayer-time/prayer-time.component";
import { OfferingsComponent } from "./offerings/offerings.component";
import { PackagesComponent } from "./packages/packages.component";
import { FaqComponent } from "./faq/faq.component";
import { FooterComponent } from "./footer/footer.component";
import { BrandComponent } from "./brand/brand.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, PrayerTimeComponent, OfferingsComponent, PackagesComponent, FaqComponent, FooterComponent, BrandComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent { }
