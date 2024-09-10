import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  isClassStarted: boolean = false;
  usuario: string | null = null;

  constructor() {}

  ngOnInit() {
    this.usuario = localStorage.getItem('usuario');
  }
}
