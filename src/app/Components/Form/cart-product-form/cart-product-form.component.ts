import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/Service/Cart/cart.service';
import { CartComponent } from '../../Cart shopping/cart/cart.component';

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
    private cartService : CartService,
    private cartComponent : CartComponent
  ) { }

  private cartForm : FormGroup;

  ngOnInit() {
    this.cartForm = this.addCartFormBuilder.group({
      cartDetail: [this.cartDetail, [Validators.required]],
      newQuantity: [this.cartDetail.quantity, [Validators.required, Validators.min(0)]]
    })
  }

  onSubmit(){
    console.log("Form: ", this.cartForm.value);
    this.cartService.updateQuantityOfAProductInACart(this.cartForm.value).subscribe(
      data => {
        console.log(data);
        this.cartComponent.ngOnInit();
      },
      error => {
        console.log(error);
      }
    );
  }

}
