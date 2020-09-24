import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-history-details',
  templateUrl: './shopping-history-details.component.html',
  styleUrls: ['./shopping-history-details.component.css']
})
export class ShoppingHistoryDetailsComponent implements OnInit {

  private purchaseOrder;

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
    if (localStorage.getItem("purchaseOrder") != null)
      this.getLocalStorage();
    else {
      this.purchaseOrder = history.state;
      localStorage.setItem("purchaseOrder", JSON.stringify(history.state));
    }
  }

  getLocalStorage() {
    this.purchaseOrder = JSON.parse(localStorage.getItem("purchaseOrder"));
  }

  ngOnDestroy(){
    localStorage.removeItem("purchaseOrder");
  }

  goBack() {
    this.router.navigateByUrl('/shopping-history');
  }

}
