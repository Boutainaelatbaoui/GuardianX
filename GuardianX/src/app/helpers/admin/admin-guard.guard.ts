import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const storageService = new StorageService(); 
  const router = new Router;

  const user =storageService.getSavedUser();

  if (user && user.role && user.role.name === 'ROLE_ADMIN') {
    return true;
  } else {
    router.navigate(['/forbidden']);
    return false;
  }
};
