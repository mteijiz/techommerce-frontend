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

  public product : Product;
  public errorMessage : String;
  public successfullMessage : String;
  private count = 0;

  constructor(
    public securityService : KeycloakSecurityService,
    private addCartFormBuilder : FormBuilder,
    private cartService : CartService,
    private previousPage : Location
  ) {
    
  }

  public cartForm : FormGroup;

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
      quantity: ['', [Validators.required, Validators.min(1), ValidationService.noDecimalValidator]]
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
        this.count = this.count + this.cartForm.value.quantity;
        this.errorMessage = null;
        this.successfullMessage = "Se agrego " + this.count + " unidad/es al carrito";
      },
      error => {
        this.successfullMessage = null;
        this.errorMessage = error;
      }
    )
    }
  }

  goBack() {
    this.previousPage.back();
  }

}
