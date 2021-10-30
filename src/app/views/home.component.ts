import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <div>
      <h1>Home</h1>
      <h3>Total users: # {{users?.length}}</h3>
    </div>
  `,
})
export class HomeViewComponent {
  users = [];
}
