import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const roleGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router);

  const role = localStorage.getItem('role');
  const expectedRole = route.data?.['role'];

  if (!role || role !== expectedRole) {
    return router.createUrlTree(['/']);
  }

  return true;
};
