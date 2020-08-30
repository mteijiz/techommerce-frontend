import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-history-details',
  templateUrl: './shopping-history-details.component.html',
  styleUrls: ['./shopping-history-details.component.css']
})
export class ShoppingHistoryDetailsComponent implements OnInit {

  purchaseOrder;

  constructor() { }

  ngOnInit() {
    this.purchaseOrder = history.state;
    console.log(this.purchaseOrder);
  }

}
