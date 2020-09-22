import { Component, OnInit } from '@angular/core';
import { PurchaseService } from 'src/app/Service/Purchase/purchase.service';

@Component({
  selector: 'app-orders-to-prepare',
  templateUrl: './orders-to-prepare.component.html',
  styleUrls: ['./orders-to-prepare.component.css']
})
export class OrdersToPrepareComponent implements OnInit {

  private purchaseOrders;
  private errorMessage : String = null;

  constructor(
    private purchaseService : PurchaseService
  ) { }

  ngOnInit() {
    this.getPurchaseOrders();
  }

  getPurchaseOrders(){
    this.purchaseService.getAllOrders().subscribe(
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
