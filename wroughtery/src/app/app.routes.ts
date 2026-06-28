import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Wroughtery — Wrought, not bought.',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'tools',
    title: 'Tools — Wroughtery',
    loadComponent: () => import('./pages/tools/tools').then((m) => m.Tools),
  },
  {
    path: 'orbital',
    title: 'Orbital — a true level, from Wroughtery',
    loadComponent: () =>
      import('./pages/orbital/orbital').then((m) => m.Orbital),
  },
  {
    path: 'lagsync',
    title: 'LagSync — perfect Bluetooth audio sync, from Wroughtery',
    loadComponent: () =>
      import('./pages/lagsync/lagsync').then((m) => m.LagSync),
  },
  { path: '**', redirectTo: '' },
];
