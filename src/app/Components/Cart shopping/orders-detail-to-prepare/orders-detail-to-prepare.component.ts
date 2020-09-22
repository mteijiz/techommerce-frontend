import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseService } from 'src/app/Service/Purchase/purchase.service';

@Component({
  selector: 'app-orders-detail-to-prepare',
  templateUrl: './orders-detail-to-prepare.component.html',
  styleUrls: ['./orders-detail-to-prepare.component.css']
})
export class OrdersDetailToPrepareComponent implements OnInit {

  purchaseOrder;

  constructor(
    private router : Router,
    private purchaseOrderService : PurchaseService
  ) { }

  ngOnInit() {
    this.purchaseOrder = history.state;
    console.log(this.purchaseOrder);
  }

  goBack() {
    this.router.navigateByUrl('/orders');
  }

  changeStatusToReady(){
    this.purchaseOrderService.changeStatus(this.purchaseOrder.purchaseOrderId).subscribe(
      data => {
        console.log(data);
        this.purchaseOrder = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  changeDetailStatus(details){
    this.purchaseOrderService.changeStatusOfDetail(this.purchaseOrder.purchaseOrderId, details.purchaseOrderDetailsId).subscribe(
      data => {
        console.log(data);
        this.purchaseOrder = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
