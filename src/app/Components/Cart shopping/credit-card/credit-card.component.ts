import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CartDetails } from 'src/app/Model/CartDetails/cart-details';
import { PurchaseService } from 'src/app/Service/Purchase/purchase.service';
import { error } from 'protractor';
import { Router } from '@angular/router';
import { ValidationService } from 'src/app/Service/Validations/validation.service';

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
    ccNumber: ['', [Validators.required, ValidationService.creditCardNumberValidator]],
    ccExpMonth: ['', [Validators.required, ValidationService.monthTwoDigitsValidator, Validators.min(0), Validators.max(12)]],
    ccExpYear: ['', [Validators.required, ValidationService.yearTwoDigitsValidator]],
    ccCvc: ['', [Validators.required, ValidationService.cvcThreeDigitsValidator]],
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
