import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/Product/product';
import { KeycloakSecurityService } from 'src/app/Service/Keycloak/keycloak-security.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CartService } from 'src/app/Service/Cart/cart.service';
import { error } from 'protractor';
import { Location } from '@angular/common';
import { ValidationService } from 'src/app/Service/Validations/validation.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  private product : Product;
  private errorMessage : String;

  constructor(
    private securityService : KeycloakSecurityService,
    private addCartFormBuilder : FormBuilder,
    private cartService : CartService,
    private previousPage : Location
  ) {
    
  }

  private cartForm : FormGroup;

  get quantity(){
    return this.cartForm.get('quantity');
  }

  ngOnInit() {
    if(localStorage.getItem("product") != null)
      this.getLocalStorage();
    else{
      this.product = history.state;
      localStorage.setItem("product", JSON.stringify(history.state));
    }
    this.setCartForm();
  }

  setCartForm(){
    this.cartForm = this.addCartFormBuilder.group({
      product: [this.product, [Validators.required]],
      quantity: ['', [Validators.required, Validators.min(0), ValidationService.noDecimalValidator]]
    })
  }

  getLocalStorage(){
    this.product = JSON.parse(localStorage.getItem("product"));
  }

  ngOnDestroy(){
    localStorage.removeItem("product");
  }

  onSubmit(){
    if(this.cartForm.get('quantity').value <= this.product.productQuantity){
    this.cartService.addToCartWithQuantity(this.cartForm.value).subscribe(
      data => {
      },
      error => {
      }
    )
    }
    else{
      this.errorMessage = "No hay suficienta cantidad para el pedido";
    }
  }

  goBack() {
    this.previousPage.back();
  }

}
