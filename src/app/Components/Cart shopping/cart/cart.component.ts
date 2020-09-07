import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/Cart/cart.service';
import { CartDetails } from 'src/app/Model/CartDetails/cart-details';
import { KeycloakSecurityService } from 'src/app/Service/Keycloak/keycloak-security.service';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Model/Cart/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private cart : Cart;
  private cartDetails : CartDetails[];
  private errorMessage : String;
  private totalAmount : number;

  constructor(
    private cartService : CartService,
    private securityService:KeycloakSecurityService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cartService.getRefreshCartValue.subscribe(() => {
      console.log("Update navbar...");
      this.getCart();
    })
    this.getCart();
  }

  deleteProductFromCart(cartDetailId){
    console.log("id: ", cartDetailId);
    this.cartService.deleteProductFromCart(cartDetailId).subscribe(
      data => {
        this.ngOnInit()
      },
      error =>{
        this.errorMessage = error.error.message;
      }
    )
  }

  onNavToOrderDetails() {
    this.router.navigate(['cart/buy'], { state: {data: this.cart.details} });
 }

 getCart(){
  this.cartService.getCart().subscribe(
    data => {
      this.cart = data;
      this.cartDetails = this.cart.details;
      this.errorMessage = null;
      this.totalAmount = this.cart.totalAmount;
      if(this.cart.quantityOfProduct == 0)
          this.errorMessage = "No se agregaron productos al carrito"
    },
    error => {
      this.errorMessage = error.error.message;
      this.totalAmount = 0;
      this.cart = null;
      this.cartDetails = null;
    }
  )
 }
}
