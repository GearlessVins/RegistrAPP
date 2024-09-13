import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  isClassStarted: boolean = false;
  usuario: string | null = null;

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
        this.redirectToLogin();
      }
    },
  ];

  constructor(private alertController: AlertController, private navCtrl: NavController) {}

  ngOnInit() {
    this.usuario = localStorage.getItem('usuario');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Finalizar la clase?',
      buttons: this.alertButtons,
    });

    await alert.present();
  }

  redirectToLogin() {
    // Navegar a la página de login
    this.navCtrl.navigateRoot('/login');
  }
}
