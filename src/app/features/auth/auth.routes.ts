import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

export const Auth: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage) },
      { path: 'sign-up', loadComponent: () => import('./pages/sign-up/sign-up.page').then(m => m.SignUpPage) }
    ]
  }
];
