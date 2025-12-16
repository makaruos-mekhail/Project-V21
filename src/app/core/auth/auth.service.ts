import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(email: string, password: string) {
    if (email === 'makaruos98@gmail.com' && password === '123456789') {
      localStorage.setItem('role', 'admin');
      return 'admin';
    }

    if (email === 'mina20@gmail.com' && password === '123456789') {
      localStorage.setItem('role', 'client');
      return 'client';
    }

    return null;
  }
}
