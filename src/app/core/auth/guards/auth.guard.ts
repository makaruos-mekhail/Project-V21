import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  if (!localStorage.getItem('role')) {
    return router.createUrlTree(['/']);
  }

  return true;
};