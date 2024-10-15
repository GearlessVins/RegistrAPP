import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service'; // Asegúrate de que esta ruta sea correcta
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; // Asegúrate de que esta ruta sea correcta

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  usuario: string; // Propiedad para almacenar el nombre de usuario
  isClassStarted: boolean = false; // Inicializa el estado de la clase

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) {
    // Obtén el nombre de usuario desde localStorage
    this.usuario = localStorage.getItem('usuario') || 'Invitado'; // Establece 'Invitado' si no hay usuario
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Estás seguro de que deseas finalizar la clase?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.cerrarSesion(); // Llama al método de cierre de sesión al confirmar
          },
        },
      ],
    });

    await alert.present();
  }

  cerrarSesion() {
    this.authService.logout(); // Llama al método de logout en el AuthService
    localStorage.clear(); // Limpia el localStorage
    this.router.navigate(['/login']); // Redirige a la página de login
  }
}
