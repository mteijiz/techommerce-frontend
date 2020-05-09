import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Header-Footer/navbar/navbar.component';
import { NavbarShopComponent } from './Components/Header-Footer/navbar-shop/navbar-shop.component';
import { FooterComponent } from './Components/Header-Footer/footer/footer.component';
import { BrandTableComponent } from './Components/Brand/brand-table/brand-table.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarShopComponent,
    FooterComponent,
    BrandTableComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
