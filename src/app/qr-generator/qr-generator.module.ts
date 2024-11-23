import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Asegúrate de importar FormsModule
import { IonicModule } from '@ionic/angular';
import { QrGeneratorPageRoutingModule } from './qr-generator-routing.module';
import { QrGeneratorPage } from './qr-generator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, // Asegúrate de incluirlo aquí
    IonicModule,
    QrGeneratorPageRoutingModule
  ],
  declarations: [QrGeneratorPage]
})
export class QrGeneratorPageModule {}
