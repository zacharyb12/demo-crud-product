import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
// recuperation de l'information dans le localstorage
  const roleAdmin = localStorage.getItem("isAdmin")

  // verification si la valeur permet de naviguer sur la route
  if(roleAdmin == "true")
  {
    // on autorise la navigation
    return true
  }

  // sinon on refuse la navigation
  return false
};
