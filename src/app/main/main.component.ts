import { Component } from '@angular/core';

@Component({
  selector: 'main',
  template: `
  <div class="container">
    <a routerLinkActive="active" routerLink="/home">Home</a> |
    <a routerLinkActive="active" routerLink="/login">Login</a> |
    <a routerLinkActive="active" routerLink="/catalog">Catalog</a>

    <router-outlet></router-outlet>
  </div>
  `,
})
export class MainViewComponent {}
