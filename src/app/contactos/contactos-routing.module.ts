import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosPage } from './contactos.page';

const routes: Routes = [
  {
    path: '',
    component: ContactosPage // Asegúrate de que el componente esté referenciado correctamente
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactosPageRoutingModule {}
