import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = localStorage.getItem('usuario'); // Comprueba si hay un usuario en localStorage

    if (isLoggedIn) {
      return true; // Permite el acceso a la ruta
    } else {
      this.router.navigate(['/login']); // Redirige a la página de login si no está autenticado
      return false; // Bloquea el acceso a la ruta
    }
  }
}
