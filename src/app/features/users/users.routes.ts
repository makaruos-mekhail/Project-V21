import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './public-layout/public-layout.component';

export const Users: Routes = [
    {
        path: '',
        component: PublicLayoutComponent,
        children: [
            { path: '', loadComponent: () => import('./pages/home/home.page').then(m => m.HomePage) },
            { path: 'contact-us', loadComponent: () => import('./pages/contact-us/contact-us.page').then(m => m.ContactUsPage) },
        ]
    }
]