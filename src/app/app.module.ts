import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Header-Footer/navbar/navbar.component';
import { NavbarShopComponent } from './Components/Header-Footer/navbar-shop/navbar-shop.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarShopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
