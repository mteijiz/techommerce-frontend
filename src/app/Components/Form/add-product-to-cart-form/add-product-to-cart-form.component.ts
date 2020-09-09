import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/Service/Cart/cart.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { KeycloakSecurityService } from 'src/app/Service/Keycloak/keycloak-security.service';

@Component({
  selector: 'app-add-product-to-cart-form',
  templateUrl: './add-product-to-cart-form.component.html',
  styleUrls: ['./add-product-to-cart-form.component.css']
})
export class AddProductToCartFormComponent implements OnInit {

  @Input() private productToAdd;
  private cartForm: FormGroup;
  private count = 0;

  constructor(
    private cartService : CartService,
    private addCartFormBuilder: FormBuilder,
    private securityService: KeycloakSecurityService
  ) { }

  ngOnInit() {
    console.log("Interminable: ", this.productToAdd);
  }

  onClick() {
    this.setCartForm();
    this.cartService.addToCartWithQuantity(this.cartForm.value).subscribe(
      data => {
        console.log("Success: ", data);
        this.count++;
      },
      error => {
      }
    )
  }

  setCartForm() {
    this.cartForm = this.addCartFormBuilder.group({
      product: [this.productToAdd, [Validators.required]],
      quantity: [1, [Validators.required, Validators.min(0)]]
    })
  }

}
