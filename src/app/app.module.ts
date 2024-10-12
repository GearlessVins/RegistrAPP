import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component'; // Componente 404
import { provideHttpClient } from '@angular/common/http'; // Proveedor de HttpClient para Angular 18+

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent // Declaración del componente 404
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideHttpClient(), // Proveedor de HttpClient
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
