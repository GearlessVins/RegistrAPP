import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service'; // Asegúrate de que esta ruta sea correcta

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private authService: AuthService) {
    // Verifica si el usuario está autenticado al iniciar la aplicación
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']); // Redirige a login si no está autenticado
    }
  }
}
