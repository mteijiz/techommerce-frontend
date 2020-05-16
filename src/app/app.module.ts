import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Header-Footer/navbar/navbar.component';
import { NavbarShopComponent } from './Components/Header-Footer/navbar-shop/navbar-shop.component';
import { FooterComponent } from './Components/Header-Footer/footer/footer.component';
import { BrandTableComponent } from './Components/Brand/brand-table/brand-table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddBrandComponent } from './Components/Brand/add-brand/add-brand.component';
import { ValidationMessagesComponent } from './Components/validation-messages/validation-messages.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UpdateBrandComponent } from './Components/Brand/update-brand/update-brand.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarShopComponent,
    FooterComponent,
    BrandTableComponent,
    AddBrandComponent,
    ValidationMessagesComponent,
    UpdateBrandComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
