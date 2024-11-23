import { Injectable } from '@angular/core';

declare var QRCode: any; // Asegúrate de que la librería QRCode.js esté instalada

@Injectable({
  providedIn: 'root'
})
export class QRCodeService {

  constructor() { }

  generateQRCode(data: string, canvas: HTMLCanvasElement): void {
    new QRCode(canvas, {
      text: data,
      width: 128,
      height: 128,
    });
  }
}
