import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'london',
    loadComponent: () => import('./london/london.component').then((m) => m.LondonComponent),

  },
  {
    path: 'tokyo',
    loadComponent: () => import('./tokyo/tokyo.component').then((m) => m.TokyoComponent),
  
  },
  {
    path: 'galway',
    loadComponent: () => import('./galway/galway.component').then((m) => m.GalwayComponent),
    
  
  },
  {
    path: 'newyork',
    loadComponent: () => import('./newyork/newyork.component').then((m) => m.NewyorkComponent),
  }
 
];
