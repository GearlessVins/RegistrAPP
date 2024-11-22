import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  formularioRegistro: FormGroup;
  passwordType = 'password'; // Controla la visibilidad de la contraseña
  passwordIcon = 'eye-off'; // Icono inicial

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private navCtrl: NavController
  ) {
    // Inicializa el formulario con validaciones
    this.formularioRegistro = this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.minLength(3)]],
      contraseña: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}

  // Alternar la visibilidad de la contraseña
  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    this.passwordIcon = this.passwordIcon === 'eye' ? 'eye-off' : 'eye';
  }

  // Validar si un campo es válido
  isFieldValid(field: string): boolean {
    const control = this.formularioRegistro.get(field);
    return control ? control.valid && (control.dirty || control.touched) : false;
  }

  // Validar si un campo es inválido
  isFieldInvalid(field: string): boolean {
    const control = this.formularioRegistro.get(field);
    return control ? control.invalid && control.touched : false;
  }

  // Guardar usuario en localStorage con validaciones
  guardarUsuario() {
    // Verifica si el formulario es válido antes de proceder
    if (!this.formularioRegistro.valid) {
      alert('Por favor, complete todos los campos correctamente.');
      return; // Si el formulario no es válido, no proceder con el registro
    }

    const { usuario, contraseña } = this.formularioRegistro.value;

    // Validar si los campos están vacíos o si el usuario es inválido
    if (!usuario || !contraseña) {
      alert('Todos los campos son requeridos.');
      return;
    }

    // Recuperar los usuarios existentes en localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');

    // Verificar si el usuario ya existe
    const usuarioExistente = usuarios.find((u: any) => u.usuario === usuario);

    if (usuarioExistente) {
      alert('El usuario ya existe. Intenta con otro nombre.');
    } else {
      // Validar la contraseña (por ejemplo, debe tener al menos 6 caracteres)
      if (contraseña.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres.');
        return;
      }

      // Si todo es válido, guardar el nuevo usuario
      usuarios.push({ usuario, contraseña });
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      alert('Usuario registrado exitosamente.');

      // Redirigir al login
      this.router.navigate(['/login']);
    }
  }

  // Método para regresar a la ventana anterior
  regresar() {
    this.navCtrl.pop();  // Regresa a la ventana anterior
  }
}
