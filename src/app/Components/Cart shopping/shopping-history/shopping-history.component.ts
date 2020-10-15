import { Component, OnInit } from '@angular/core';
import { PurchaseService } from 'src/app/Service/Purchase/purchase.service';
import { error } from 'protractor';

@Component({
  selector: 'app-shopping-history',
  templateUrl: './shopping-history.component.html',
  styleUrls: ['./shopping-history.component.css']
})
export class ShoppingHistoryComponent implements OnInit {

  public purchaseOrders;
  public errorMessage : String = null;
  public p : any;
  
  constructor(
    private purchaseService : PurchaseService
  ) { }

  ngOnInit() {
    this.getPurchaseOrders();
  }

  getPurchaseOrders(){
    this.purchaseService.getOrderOfUser().subscribe(
      data => {
        console.log('Success', data);
        this.purchaseOrders = data;
        this.errorMessage = null;
      },
      error => {
        this.errorMessage = error.error.message;
      }
    );
  }

}
