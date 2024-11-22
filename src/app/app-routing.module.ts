import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard'; // Asegúrate de que esta ruta sea correcta

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'registrar', loadChildren: () => import('./registrar/registrar.module').then(m => m.RegistrarPageModule) },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard] // Aplica el guard a la ruta home
  },
  {
    path: 'formulario',
    loadChildren: () => import('./formulario/formulario.module').then(m => m.FormularioPageModule),
  },
  {
    path: 'contactos',
    loadChildren: () => import('./contactos/contactos.module').then(m => m.ContactosPageModule),
    canActivate: [AuthGuard] // Aplica el guard a la ruta contactos
  },
  { path: '**', redirectTo: 'login' },   {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
  }
// Redirige a login si la ruta no se encuentra
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
