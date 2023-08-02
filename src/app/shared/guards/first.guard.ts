import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const firstGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
 // router.navigate(['pippo']);
  return true;
};
