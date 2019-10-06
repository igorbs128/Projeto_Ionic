import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  lista: String[] = ['Maçãs', 'Laranjas', 'Peras'];
  flag: Boolean = false;
  constructor() {

    setTimeout(() => {
      this.flag = true;
    }, 5000);
  }


  ngOnInit() {
  }

}
