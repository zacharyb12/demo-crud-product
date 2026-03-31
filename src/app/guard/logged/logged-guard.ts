import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loggedGuard: CanActivateFn = (route, state) => {

  const isLogged = localStorage.getItem("isLogged")
  const router = inject(Router)

  if(isLogged == "true")
  {
    return true;
  }

  router.navigateByUrl("/")
  return false;
};
