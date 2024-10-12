import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Asegúrate de importar HttpClient

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {
  user: any;

  constructor(private http: HttpClient) {} // Inyectamos HttpClient

  ngOnInit() {
    // Carga del usuario inicial
    this.fetchRandomUser();
  }

  // Método para generar un usuario aleatorio
  fetchRandomUser() {
    // Lógica para obtener un usuario aleatorio
    this.http.get('https://randomuser.me/api/')
      .subscribe((response: any) => {
        this.user = response.results[0]; // Asigna el resultado a this.user
      });
  }
}
