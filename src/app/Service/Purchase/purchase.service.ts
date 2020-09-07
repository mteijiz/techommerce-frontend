import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  
  private baseUrl = 'http://localhost:8080' + '/purchase/';

  private addPurchaseUrl = this.baseUrl + 'add';
  private getOrdersUrl = this.baseUrl + 'getOrders'

  private refreshCartValue = new Subject<void>();

  get getRefreshCartValue() {
    return this.refreshCartValue;
  }

  constructor(
    private http: HttpClient
  ) { }

  addPurchase() : Observable<any>{
    return this.http.get<any>(this.addPurchaseUrl)
      .pipe(
        tap(() => {
          this.refreshCartValue.next();
        })
      );
  }

  getOrderOfUser() : Observable<any> {
    return this.http.get<any>(this.getOrdersUrl);
  }

}
