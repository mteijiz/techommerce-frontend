import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CartDetails } from 'src/app/Model/CartDetails/cart-details';
import { PurchaseService } from 'src/app/Service/Purchase/purchase.service';
import { error } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  private ccNumberComplete;

  constructor(
    private creditCardFormBuilder: FormBuilder,
    private cartDetailsFormBuilder: FormBuilder,
    private purchaseService : PurchaseService,
    private router : Router
  ) { }

  private productsPurchased : CartDetails [];

  private creditCardForm = this.creditCardFormBuilder.group({
    ccNumber: ['', [Validators.required, Validators.pattern('^4[0-9]{3}-?[0-9]{4}-?[0-9]{4}-?[0-9]{4}$')]],
    ccExpMonth: ['', [Validators.required, Validators.pattern('[0-1][0-9]')]],
    ccExpYear: ['', [Validators.required, Validators.pattern('[0-9]{2}')]],
    ccCvc: ['', [Validators.required, Validators.pattern('[0-9]{3}')]],
    ccHolderName: ['', [Validators.required]]
  });

  private cartDetailsForm : FormGroup;

  get ccNumber(){
    return this.creditCardForm.get('ccNumber');
  }
  get ccExpMonth(){
    return this.creditCardForm.get('ccExpMonth');
  }
  get ccExpYear(){
    return this.creditCardForm.get('ccExpYear');
  }
  get ccCvc(){
    return this.creditCardForm.get('ccCvc');
  }
  get ccHolderName(){
    return this.creditCardForm.get('ccHolderName');
  }

  ngOnInit() {
  }

  onSubmit(){
    this.purchaseService.addPurchase().subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    )
  }

  goToCartTable(){
    this.router.navigateByUrl('/cart');
  }

}
