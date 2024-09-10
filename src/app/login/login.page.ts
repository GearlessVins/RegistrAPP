import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  formularioLogin: FormGroup;
  usuarioFocused = false;
  passwordFocused = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.formularioLogin = this.fb.group({
      usuario: ['', Validators.required],
      contraseña: ['', Validators.required],
    });
  }

  isFieldInvalid(field: string): boolean {
    const control = this.formularioLogin.get(field);
    return control?.invalid && (control.dirty || control.touched) || false;
  }

  isFieldValid(field: string): boolean {
    const control = this.formularioLogin.get(field);
    return control?.valid && (control.dirty || control.touched) || false;
  }

  irHome() {
    const usuario = this.formularioLogin.get('usuario')?.value;
    localStorage.setItem('usuario', usuario); // Guarda el usuario en localStorage
    this.router.navigate(['/home']); // Redirige a la página de inicio
  }
}
