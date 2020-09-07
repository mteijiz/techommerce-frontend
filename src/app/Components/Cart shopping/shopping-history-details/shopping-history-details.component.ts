import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-history-details',
  templateUrl: './shopping-history-details.component.html',
  styleUrls: ['./shopping-history-details.component.css']
})
export class ShoppingHistoryDetailsComponent implements OnInit {

  purchaseOrder;

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
    this.purchaseOrder = history.state;
    console.log(this.purchaseOrder);
  }

  goBack() {
    this.router.navigateByUrl('/shopping-history');
  }

}
