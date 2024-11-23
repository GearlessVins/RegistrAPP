import { Component } from '@angular/core';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-qr-generator',
  templateUrl: './qr-generator.page.html',
  styleUrls: ['./qr-generator.page.scss'],
})
export class QrGeneratorPage {
  qrData: string = ''; // Almacena el texto que se convertirá en QR
  qrCode: string = ''; // Almacena la imagen del QR generado

  generateQRCode() {
    if (this.qrData) {
      QRCode.toDataURL(this.qrData)
        .then(url => {
          this.qrCode = url;
        })
        .catch(err => {
          console.error('Error al generar el QR:', err);
        });
    } else {
      console.error('No se ha proporcionado texto para generar el QR');
    }
  }
}
