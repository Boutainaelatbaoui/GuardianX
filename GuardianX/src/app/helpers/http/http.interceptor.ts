import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent, HttpErrorResponse,
} from '@angular/common/http';
import {catchError, concatMap, Observable, switchMap, take, throwError} from 'rxjs';
import {Router} from "@angular/router";
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router, private storageService: StorageService) {
  }

intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  return this.authService.AuthenticatedUser$.pipe(
    take(1),
    switchMap(user => {
      if (!user) {
        return next.handle(request);
      }
      const token = this.storageService.getSavedUser().token;
      console.log(token);
      if (token) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
      }
      return next.handle(request);
    })
  );
}

}