import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withHashLocation } from '@angular/router';
import Aura from '@primeng/themes/aura';
import { ConfirmationService, MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';
import { HttpRequestInterceptor } from './@core/HttpInterceptor';
import { AppConfigService } from './@core/services/appConfig.service';
import { CommonService } from './@core/services/common.service';
import { routes } from './app.routes';
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    AppConfigService,
    CommonService,
    MessageService,
    ConfirmationService,
    provideRouter(routes, withHashLocation()),
    provideAnimationsAsync(),
    provideExperimentalZonelessChangeDetection(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false || 'none',
        },
      },
    }),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
  ],
};
