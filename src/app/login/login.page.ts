import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';  // Importa Router

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  formularioLogin: FormGroup;
  usuarioFocused = false;
  passwordFocused = false;
  
  // Propiedades para mostrar/ocultar la contraseña
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  constructor(private fb: FormBuilder, private router: Router) {  // Inyecta Router
    this.formularioLogin = this.fb.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required]
    });
  }

  // Método para verificar si un campo es inválido
  isFieldInvalid(field: string): boolean {
    const control = this.formularioLogin.get(field);
    return control ? control.invalid && (control.dirty || control.touched) : false;
  }

  // Método para verificar si un campo es válido
  isFieldValid(field: string): boolean {
    const control = this.formularioLogin.get(field);
    return control ? control.valid && (control.dirty || control.touched) : false;
  }

  // Método para redirigir al home
  irHome() {
    if (this.formularioLogin.valid) {  // Verifica si el formulario es válido
      this.router.navigate(['/home']);  // Redirige a la página de inicio
    }
  }

  // Método para alternar la visibilidad de la contraseña
  togglePasswordVisibility() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
      this.passwordIcon = 'eye';
    } else {
      this.passwordType = 'password';
      this.passwordIcon = 'eye-off';
    }
  }
}
