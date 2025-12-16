import { Routes } from '@angular/router';
import { roleGuard } from '../../core/auth/guards/role.guard';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { authGuard } from '../../core/auth/guards/auth.guard';

export const Dashboard: Routes = [
    {
        path: '',
        component: DashboardLayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path: 'dashboard-admin', canActivate: [roleGuard],
                data: { role: 'admin' },
                loadComponent: () => import('./pages/dashboard-admin/dashboard-admin.page').then(m => m.DashboardAdminPage)
            },
            {
                path: 'dashboard-client', canActivate: [roleGuard],
                data: { role: 'client' },
                loadComponent: () => import('../users/pages/dashboard-client/dashboard-client.page').then(m => m.DashboardClientPage)
            },
        ]
    }
]