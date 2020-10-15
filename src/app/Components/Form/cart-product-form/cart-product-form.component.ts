import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/Service/Cart/cart.service';
import { CartComponent } from '../../Cart shopping/cart/cart.component';
import { ValidationService } from 'src/app/Service/Validations/validation.service';

@Component({
  selector: 'app-cart-product-form',
  templateUrl: './cart-product-form.component.html',
  styleUrls: ['./cart-product-form.component.css'],
  providers: [CartComponent]
})
export class CartProductFormComponent implements OnInit {

  @Input() cartDetail;

  constructor(
    private addCartFormBuilder : FormBuilder,
    private cartService : CartService
  ) { }

  public cartForm : FormGroup;

  ngOnInit() {
    this.cartForm = this.addCartFormBuilder.group({
      cartDetail: [this.cartDetail, [Validators.required]],
      newQuantity: [this.cartDetail.quantity, [Validators.required, Validators.min(1), ValidationService.noDecimalValidator]]
    })
  }

  get newQuantity(){
    return this.cartForm.get('newQuantity')
  }

  onSubmit(){
    this.cartService.updateQuantityOfAProductInACart(this.cartForm.value).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

}
