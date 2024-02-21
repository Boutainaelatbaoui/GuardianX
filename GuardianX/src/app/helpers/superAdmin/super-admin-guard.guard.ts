import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage/storage.service';

export const superAdminGuardGuard: CanActivateFn = (route, state) => {
  return true;

};
