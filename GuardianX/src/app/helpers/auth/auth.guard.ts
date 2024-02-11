import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {map, take} from "rxjs";
import { AuthService } from 'src/app/services/auth/auth.service';

export const authGuard: CanActivateFn = (
  route,
  state
) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.AuthenticatedUser$.pipe(
    take(1),
    map(user => {
      const { roles } = route.data;
      if(user && user.role && roles.includes(user.role.name)) {
        return true;
      }
      if(user) {
        return  router.createUrlTree(['/forbidden']);
      }
      return  router.createUrlTree(['/login']);
    })
  )
};