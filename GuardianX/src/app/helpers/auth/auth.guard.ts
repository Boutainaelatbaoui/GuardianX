import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (
  route,
  state
) => {
  const router = new Router;
  const user = localStorage.getItem('authenticated-user')
  if(user){
    return true;
  } else{
    router.navigate(['/login']);
    return false;
  }

}
