import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private validUsername = 'user'; // Usuario permitido
  private validPassword = 'password'; // Contraseña permitida

  // Método para iniciar sesión
  login(username: string, password: string): { success: boolean, message: string } {
    if (username === this.validUsername && password === this.validPassword) {
      localStorage.setItem('usuario', username);
      return { success: true, message: 'Login exitoso' };
    } else if (username !== this.validUsername) {
      return { success: false, message: 'Usuario incorrecto' };
    } else {
      return { success: false, message: 'Contraseña incorrecta' };
    }
  }

  // Método para comprobar si el usuario está autenticado
  isAuthenticated(): boolean {
    return localStorage.getItem('usuario') !== null; // Retorna true si hay un usuario en localStorage
  }

  // Método para cerrar sesión
  logout() {
    localStorage.removeItem('usuario'); // Elimina el usuario de localStorage
  }
}
