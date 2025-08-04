import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  diaria = 100;
  dias = 1;

  constructor(private router: Router) {}

  continuar() {
    this.router.navigate(['/detalhes'], {
      state: {
        diaria: this.diaria,
        dias: this.dias,
      },
    });
  }

}
