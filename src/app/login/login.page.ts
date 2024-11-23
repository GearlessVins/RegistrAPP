import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Asegúrate de que esta ruta sea correcta

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;
  usuarioFocused = false;
  passwordFocused = false;
  passwordType = 'password';
  passwordIcon = 'eye-off';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // Inicialización del formulario con validaciones
    this.formularioLogin = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      contraseña: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  // Alternar visibilidad de la contraseña
  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    this.passwordIcon = this.passwordIcon === 'eye' ? 'eye-off' : 'eye';
  }

  // Iniciar sesión
  irHome() {
    const { usuario, contraseña } = this.formularioLogin.value;

    console.log('Valores del formulario:', this.formularioLogin.value);

    // Validar login a través del AuthService
    const resultado = this.authService.login(usuario, contraseña);
    if (resultado.success) {
      localStorage.setItem('usuario', usuario); // Guardar usuario autenticado
      this.router.navigate(['/home']); // Redirigir a la página principal
    } else {
      alert(resultado.message); // Mostrar mensaje de error
    }
  }

  // Validar si un campo es válido
  isFieldValid(field: string): boolean {
    const control = this.formularioLogin.get(field);
    return control ? control.valid && (control.dirty || control.touched) : false;
  }

  // Validar si un campo es inválido
  isFieldInvalid(field: string): boolean {
    const control = this.formularioLogin.get(field);
    return control ? control.invalid && control.touched : false;
  }

  // Redirigir al registro
  irRegistrar() {
    this.router.navigate(['/registrar']); // Redirige a la página de registro
  }
}
