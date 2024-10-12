import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  isClassStarted: boolean = false; // Estado de la clase
  usuario: string | null = null; // Variable para almacenar el usuario

  // Definición de los botones del alert
  public alertButtons = [
    {
      text: 'No',
      cssClass: 'alert-button-cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    },
    {
      text: 'Si',
      cssClass: 'alert-button-confirm',
      handler: () => {
        this.redirectToLogin(); // Redirigir al login si se confirma
      }
    },
  ];

  // Inyectamos AlertController, NavController y Router
  constructor(private alertController: AlertController, private navCtrl: NavController, private router: Router) {}

  ngOnInit() {
    // Recuperar el usuario del localStorage al inicializar
    this.usuario = localStorage.getItem('usuario');
  }

  // Método para mostrar el alert
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Finalizar la clase?',
      buttons: this.alertButtons,
    });

    await alert.present();
  }

  // Método para redirigir al login
  redirectToLogin() {
    this.navCtrl.navigateRoot('/login'); // Navegación al login
    // También se podría usar Router si prefieres: this.router.navigate(['/login']);
  }
}
