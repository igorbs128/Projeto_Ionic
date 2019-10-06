import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

titulo: String;
numero: number = 0;
  constructor() {
    this.titulo = 'Página de Login';
    this.iniciaContagem();
  }
  ngOnInit() {
  }

  iniciaContagem() {
    setInterval(() => {
      this.numero++;
      console.log(this.numero);
    }, 1000);
  }

  realizarLogin() {
    console.log('realizado login');
  }

}
