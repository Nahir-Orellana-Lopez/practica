// import { Routes } from '@angular/router';
// import { SwitchComponent } from './components/switch/switch.component';

// export const routes: Routes = [
//   {
//     path: '',
//     component: SwitchComponent,
//   },
//   {
//     path: '**',
//     redirectTo: '',
//   },
// ];
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'estadisticas',
    loadComponent: () =>
      import('./components/estadisticas/estadisticas.component').then(
        (m) => m.EstadisticasComponent,
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./components/switch/switch.component').then(
        (m) => m.SwitchComponent,
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
