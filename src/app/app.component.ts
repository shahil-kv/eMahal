import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
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

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!(event.target as HTMLElement).closest('.dropdown')) {
      const checkboxes = document.querySelectorAll('.dropdown-input');
      checkboxes.forEach((checkbox: any) => {
        checkbox.checked = false;
      });
    }
  }
  ngOnInit(): void { }
}
