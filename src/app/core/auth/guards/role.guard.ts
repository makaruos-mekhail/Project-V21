import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const roleGuard: CanMatchFn = (route) => {
  const router = inject(Router);
  const role = localStorage.getItem('role');
  const expectedRole = route.data?.['role'];

  if (role !== expectedRole) {
    return router.createUrlTree(['/']);
  }

  return true;
};
