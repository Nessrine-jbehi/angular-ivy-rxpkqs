import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginViewComponent } from './views/login.component';
import { HomeViewComponent } from './views/home.component';
import { CatalogViewComponent } from './views/cataloge.component';
import { MainViewComponent } from './main/main.component';

@NgModule({
  declarations: [
    MainViewComponent,
    LoginViewComponent,
    HomeViewComponent,
    CatalogViewComponent,
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomeViewComponent },
      { path: 'login', component: LoginViewComponent },
      { path: 'catalog', component: CatalogViewComponent },
      { path: '**', redirectTo: 'home' },
    ]),
  ],
  exports: [RouterModule, MainViewComponent],
  providers: [],
})
export class AppRoutingModule {}
