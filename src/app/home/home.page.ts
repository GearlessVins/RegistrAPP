import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router para la redirección

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  isClassStarted: boolean = false;
  usuario: string | null = null;

  // Definición de los botones del alert
  public alertButtons = [
    {
      text: 'No',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Yes',
      cssClass: 'alert-button-confirm',
      handler: () => {
        // Lógica para redirigir al login
        this.redirectToLogin();
      },
    },
  ];

  constructor(private router: Router) {} // Inyecta Router

  ngOnInit() {
    this.usuario = localStorage.getItem('usuario');
  }

  // Método para redirigir al login
  redirectToLogin() {
    this.router.navigate(['/login']);
  }
}
