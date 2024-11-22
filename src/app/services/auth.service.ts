import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Método para iniciar sesión
  login(username: string, password: string): { success: boolean; message: string } {
    // Recuperar usuarios del localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    // Buscar si el usuario existe con el nombre y contraseña proporcionados
    const usuarioExistente = usuarios.find(
      (u: any) => u.usuario === username && u.contraseña === password
    );

    if (usuarioExistente) {
      localStorage.setItem('usuario', username); // Guardar usuario autenticado
      return { success: true, message: 'Login exitoso' };
    } else {
      return { success: false, message: 'Usuario o contraseña incorrectos' };
    }
  }

  // Método para comprobar si el usuario está autenticado
  isAuthenticated(): boolean {
    return localStorage.getItem('usuario') !== null;
  }

  // Método para cerrar sesión
  logout() {
    localStorage.removeItem('usuario');
  }
}
