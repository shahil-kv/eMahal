import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LoadingServiceService } from './services/loading-service.service';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

    constructor(private _loading: LoadingServiceService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Start loading indicator
        this._loading.setLoading(true, request.url);

        return next.handle(request).pipe(
            // Handle errors
            catchError((err) => {
                this._loading.setLoading(false, request.url); // Stop loading on error
                return throwError(() => err); // Ensure type compatibility
            }),
            // Handle successful responses
            map((evt: HttpEvent<any>) => {
                if (evt instanceof HttpResponse) {
                    this._loading.setLoading(false, request.url); // Stop loading on success
                }
                return evt; // Ensure correct type is returned
            })
        );
    }
}
