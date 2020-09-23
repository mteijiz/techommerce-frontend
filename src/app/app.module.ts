import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { CategoryTableComponent } from './Components/Category/category-table/category-table.component';
import { AddCategoryComponent } from './Components/Category/add-category/add-category.component';
import { UpdateCategoryComponent } from './Components/Category/update-category/update-category.component';
import { SubcategoryTableComponent } from './Components/Subcategory/subcategory-table/subcategory-table.component';
import { AddSubcategoryComponent } from './Components/Subcategory/add-subcategory/add-subcategory.component';
import { UpdateSubcategoryComponent } from './Components/Subcategory/update-subcategory/update-subcategory.component';
import { ProductTableComponent } from './Components/Product/product-table/product-table.component';
import { AddProductComponent } from './Components/Product/add-product/add-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateProductComponent } from './Components/Product/update-product/update-product.component';
import { ImageCardListComponent } from './Components/Product/image-card-list/image-card-list.component';
import { ModalDeleteImageComponent } from './Components/Modal/modal-delete-image/modal-delete-image.component';
import { ProductListComponent } from './Components/Product/product-list/product-list.component';
import { KeycloakSecurityService } from './Service/Keycloak/keycloak-security.service';
import { RequestInterceptorService } from './Service/Request-interceptor/request-interceptor.service';
import { CartComponent } from './Components/Cart shopping/cart/cart.component';
import { ProductDetailsComponent } from './Components/Product/product-details/product-details.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { ProductCarouselComponent } from './Components/Product/product-carousel/product-carousel.component';
import { ShoppingHistoryComponent } from './Components/Cart shopping/shopping-history/shopping-history.component';
import { CreditCardComponent } from './Components/Cart shopping/credit-card/credit-card.component';
import { ShoppingHistoryDetailsComponent } from './Components/Cart shopping/shopping-history-details/shopping-history-details.component';
import { CartProductFormComponent } from './Components/Form/cart-product-form/cart-product-form.component';
import { AddProductToCartFormComponent } from './Components/Form/add-product-to-cart-form/add-product-to-cart-form.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ModalProductFilterComponent } from './Components/Modal/modal-product-filter/modal-product-filter.component';
import { ModalWarningPriceComponent } from './Components/Modal/modal-warning-price/modal-warning-price.component';
import { ModalWarningProductComponent } from './Components/Modal/modal-warning-product/modal-warning-product.component';
import { OrdersToPrepareComponent } from './Components/Cart shopping/orders-to-prepare/orders-to-prepare.component';
import { OrdersDetailToPrepareComponent } from './Components/Cart shopping/orders-detail-to-prepare/orders-detail-to-prepare.component'; 

export function kcFactory(kcSecurity:KeycloakSecurityService){
  return () => kcSecurity.init(); 
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarShopComponent,
    FooterComponent,
    BrandTableComponent,
    AddBrandComponent,
    ValidationMessagesComponent,
    UpdateBrandComponent,
    CategoryTableComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    SubcategoryTableComponent,
    AddSubcategoryComponent,
    UpdateSubcategoryComponent,
    ProductTableComponent,
    AddProductComponent,
    UpdateProductComponent,
    ImageCardListComponent,
    ModalDeleteImageComponent,
    ProductListComponent,
    CartComponent,
    ProductDetailsComponent,
    HomeComponent,
    ProductCarouselComponent,
    ShoppingHistoryComponent,
    CreditCardComponent,
    ShoppingHistoryDetailsComponent,
    CartProductFormComponent,
    AddProductToCartFormComponent,
    PageNotFoundComponent,
    ModalProductFilterComponent,
    ModalWarningPriceComponent,
    ModalWarningProductComponent,
    OrdersToPrepareComponent,
    OrdersDetailToPrepareComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    NgbModule
  ],
  providers: [
    { provide: APP_INITIALIZER, deps: [KeycloakSecurityService], useFactory: kcFactory, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalDeleteImageComponent,
    ModalProductFilterComponent,
    ModalWarningPriceComponent,
    ModalWarningProductComponent
  ]
})
export class AppModule { }
