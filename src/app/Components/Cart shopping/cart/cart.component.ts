import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/Cart/cart.service';
import { CartDetails } from 'src/app/Model/CartDetails/cart-details';
import { KeycloakSecurityService } from 'src/app/Service/Keycloak/keycloak-security.service';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Model/Cart/cart';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalWarningPriceComponent } from '../../Modal/modal-warning-price/modal-warning-price.component';
import { ModalWarningProductComponent } from '../../Modal/modal-warning-product/modal-warning-product.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cart : Cart;
  public cartDetails : CartDetails[];
  public errorMessage : String;
  public totalAmount : number;
  public p : any;

  constructor(
    private cartService : CartService,
    private securityService:KeycloakSecurityService,
    private router: Router,
    private modalService: NgbModal
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
    },
    error => {
      this.errorMessage = error.error.message;
      this.totalAmount = 0;
      this.cart = null;
      this.cartDetails = null;
    }
  )
 }

 checkStatusCartDetails(){
   for(let detail of this.cartDetails){
    if(!detail.state){
      return true;
    } 
   }
   return false;
 }

 openWarningPriceModal(cartDetail){
  const modalRef = this.modalService.open(ModalWarningPriceComponent);
  modalRef.result.then((result) => {
  }).catch((error) => {
  });
 }

 openWarningProductModal(cartDetail){
  const modalRef = this.modalService.open(ModalWarningProductComponent);
  modalRef.result.then((result) => {
  }).catch((error) => {
  });
 }
}
