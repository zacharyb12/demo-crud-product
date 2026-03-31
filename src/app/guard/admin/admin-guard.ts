import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
// recuperation de l'information dans le localstorage
  const roleAdmin = localStorage.getItem("isAdmin")
  const router = inject(Router)

  // verification si la valeur permet de naviguer sur la route
  if(roleAdmin == "true")
  {
    // on autorise la navigation
    return true
  }
// redirection de l'utilisateur
  router.navigateByUrl("/")
  // sinon on refuse la navigation
  return false
};
