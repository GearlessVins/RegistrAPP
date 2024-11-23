import { Component, OnInit } from '@angular/core';
import * as QRCode from 'qrcode';
import { Location } from '@angular/common';

@Component({
  selector: 'app-qr-generator',
  templateUrl: './qr-generator.page.html',
  styleUrls: ['./qr-generator.page.scss'],
})
export class QrGeneratorPage implements OnInit {
  usuario: string = '';  // Recibe el nombre del usuario desde la página anterior
  qrData: string = '';  // Almacena el texto para el QR
  qrCode: string = '';  // Almacena la imagen del QR
  isClassStarted: boolean = true;  // Estado de la clase (iniciada o no iniciada)
  customTitle: string = '';  // Título personalizado ingresado por el usuario

  constructor(private location: Location) {}

  ngOnInit() {
    // Recuperar el nombre del usuario desde localStorage
    this.usuario = localStorage.getItem('usuario') || 'Invitado';  // 'Invitado' si no hay usuario
    console.log('Usuario desde localStorage:', this.usuario);  // Verifica que el usuario sea recibido correctamente
  }

  // Función para generar el QR
  generateQRCode() {
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString('es-ES');  // Fecha en formato español
    const time = currentDate.toLocaleTimeString('es-ES');  // Hora en formato español

    // Aquí estamos tomando el estado de la clase (iniciada o no iniciada)
    const classStatus = this.isClassStarted ? 'Clase iniciada' : 'Clase no iniciada';

    // El texto que se va a mostrar en el QR
    this.qrData = `
      Título: ${this.customTitle}
      Fecha: ${date}
      Hora: ${time}
      Estado: ${classStatus}
      Asistencia: Presente
      Usuario: ${this.usuario}
    `;

    // Generar el QR con el texto completo
    QRCode.toDataURL(this.qrData)
      .then(url => {
        this.qrCode = url;  // Asigna la URL del QR generado
      })
      .catch(err => {
        console.error('Error al generar QR:', err);
      });
  }
}
