import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Home } from './home/home';
import { authGuard } from './auth-guard';
import { Layouts } from './layouts/layouts';
import { checkGuard } from './check-guard';

export const routes: Routes = [
  {
    path: '',
    component: Layouts,
    canActivateChild: [authGuard],
    children: [
      {
        path: '',
        canDeactivate:[checkGuard],
        component: Home,
      },
    ],
  },
  {
    path: 'login',
    component: Login,
  },
];
