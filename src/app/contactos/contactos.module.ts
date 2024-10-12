import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ContactosPage } from './contactos.page';
import { ContactosPageRoutingModule } from './contactos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactosPageRoutingModule // Importando el módulo de rutas
  ],
  declarations: [ContactosPage] // Declarando el componente ContactosPage
})
export class ContactosPageModule {}
