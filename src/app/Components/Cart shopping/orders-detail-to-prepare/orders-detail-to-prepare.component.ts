import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseService } from 'src/app/Service/Purchase/purchase.service';

@Component({
  selector: 'app-orders-detail-to-prepare',
  templateUrl: './orders-detail-to-prepare.component.html',
  styleUrls: ['./orders-detail-to-prepare.component.css']
})
export class OrdersDetailToPrepareComponent implements OnInit {

  private purchaseOrder;

  constructor(
    private router: Router,
    private purchaseOrderService: PurchaseService
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
    this.router.navigateByUrl('/orders');
  }

  changeStatusToReady() {
    this.purchaseOrderService.changeStatus(this.purchaseOrder.purchaseOrderId).subscribe(
      data => {
        console.log(data);
        this.purchaseOrder = data;
        this.updateLocalStorage(this.purchaseOrder);
      },
      error => {
        console.log(error);
      }
    );
  }

  changeDetailStatus(details) {
    this.purchaseOrderService.changeStatusOfDetail(this.purchaseOrder.purchaseOrderId, details.purchaseOrderDetailsId).subscribe(
      data => {
        console.log(data);
        this.purchaseOrder = data;
        this.updateLocalStorage(this.purchaseOrder);
      },
      error => {
        console.log(error);
      }
    );
  }

  updateLocalStorage(purchaseOrder){
    localStorage.setItem("purchaseOrder", JSON.stringify(purchaseOrder));
  }
}
