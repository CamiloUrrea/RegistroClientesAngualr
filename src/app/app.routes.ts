import { Routes } from '@angular/router';
import { RegistrarClienteComponent } from './registrar-cliente/registrar-cliente.component';

export const routes: Routes = [
  { path: '',         redirectTo: 'registrar', pathMatch: 'full' },
  { path: 'registrar', component: RegistrarClienteComponent },
  { path: '**',       redirectTo: 'registrar' }
];
