import { Component, OnInit } from '@angular/core';
import { KeycloakSecurityService } from 'src/app/Service/Keycloak/keycloak-security.service';
import { BrandService } from 'src/app/Service/Brand/brand.service';
import { Brand } from 'src/app/Model/Brand/brand';
import { CategoryService } from 'src/app/Service/Category/category.service';
import { Category } from 'src/app/Model/Category/category';
import { CartService } from 'src/app/Service/Cart/cart.service';
import { Cart } from 'src/app/Model/Cart/cart';
import { PurchaseService } from 'src/app/Service/Purchase/purchase.service';

@Component({
  selector: 'app-navbar-shop',
  templateUrl: './navbar-shop.component.html',
  styleUrls: ['./navbar-shop.component.css']
})
export class NavbarShopComponent implements OnInit {

  private categoryList : Category[];
  private errorMessage : String;
  private quantityOfProductInCart : number;
  private cart : Cart;
  

  constructor(
    private securityService:KeycloakSecurityService,
    private crudCategory: CategoryService,
    private cartService: CartService,
    private purchaseService: PurchaseService
  ) { }

  ngOnInit() {
    this.cartService.getRefreshCartValue.subscribe(() => {
      this.getQuantityOfProductInACart();
    })
    this.purchaseService.getRefreshCartValue.subscribe(() => {
      this.getQuantityOfProductInACart();
    })
    this.getAllActiveDirectories();
    if(this.securityService.keycloak.authenticated)
      this.getQuantityOfProductInACart();
  }

  isAppManager(){
    return this.securityService.keycloak.hasRealmRole("app-manager");
  }

  getAllActiveDirectories(){
    this.crudCategory.getAllActiveCategory().subscribe(
      data => {
        this.categoryList = data;
        this.errorMessage = null;
      },
      error => {
        this.errorMessage = error.error.message;
      }

    )
  }

  getQuantityOfProductInACart(){
    this.cartService.getCart().subscribe(
      data => {
        this.cart = data;
        this.quantityOfProductInCart = this.cart.quantityOfProduct;
      },
      error =>{
        this.errorMessage = error.error.message;
      }
    );
  }
}
