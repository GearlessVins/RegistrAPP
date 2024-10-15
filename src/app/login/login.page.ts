import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup; // Formulario para el login
  usuarioFocused = false; // Controla el enfoque del campo de usuario
  passwordFocused = false; // Controla el enfoque del campo de contraseña
  passwordType = 'password'; // Tipo de entrada para la contraseña
  passwordIcon = 'eye-off'; // Icono inicial para mostrar/ocultar contraseña

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // Inicializa el formulario con validaciones
    this.formularioLogin = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      contraseña: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  // Método para alternar la visibilidad de la contraseña
  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    this.passwordIcon = this.passwordIcon === 'eye' ? 'eye-off' : 'eye';
  }

  // Método para iniciar sesión
  irHome() {
    const { usuario, contraseña } = this.formularioLogin.value; // Obtiene los valores del formulario

    console.log('Valores del formulario:', this.formularioLogin.value); // Muestra los valores en la consola

    // Lógica de autenticación
    if (this.authService.login(usuario, contraseña)) { // Verifica las credenciales
      localStorage.setItem('usuario', usuario); // Almacena el nombre de usuario en localStorage
      this.router.navigate(['/home']); // Redirige a la página de inicio
    } else {
      alert('Nombre de usuario o contraseña incorrectos'); // Mensaje de error
    }
  }

  // Verifica si un campo es válido
  isFieldValid(field: string): boolean {
    const control = this.formularioLogin.get(field);
    return control ? control.valid && (control.dirty || control.touched) : false;
  }

  // Verifica si un campo es inválido
  isFieldInvalid(field: string): boolean {
    const control = this.formularioLogin.get(field);
    return control ? control.invalid && control.touched : false;
  }
}
