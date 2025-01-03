import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinner } from 'primeng/progressspinner';
import { delay } from 'rxjs';
import { environment } from '../environments/environment';
import { LoadingServiceService } from './@core/services/loading-service.service';
@Component({
  selector: 'app-root',
  imports: [CommonModule, ButtonModule, RouterModule, ProgressSpinner],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'eMahal';
  loading: boolean = false;
  appversion: string = environment.appVersion;

  constructor(private _loading: LoadingServiceService) {}
  ngOnInit(): void {
    this.listenToLoading();
  }

  /**
   * Listen to the loadingSub property in the LoadingService class. This drives the
   * display of the loading spinner.
   */
  listenToLoading(): void {
    this._loading.loadingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }
}
