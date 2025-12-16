import { Routes } from '@angular/router';

export const routes: Routes = [
    // 🌍 Public Website
    {
        path: '',
        loadChildren: () => import('./features/users/users.routes').then(m => m.Users)
    },

    // 🔐 Auth Pages
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.routes').then(m => m.Auth)
    },

    // 📊 Dashboards
    {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.Dashboard),
        
    },
    { path: '**', redirectTo: '' },
];
