import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contactos-page',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {
  users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchRandomUsers();
  }

  fetchRandomUsers() {
    this.http.get('https://randomuser.me/api/?results=3').subscribe((response: any) => {
      this.users = response.results;
    });
  }
}
