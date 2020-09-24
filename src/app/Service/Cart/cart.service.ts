import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl = 'http://localhost:8080' + '/carts/';

  getUserCartUrl = this.baseUrl + 'get';
  getQuantityOfCartUrl = this.baseUrl + 'getQuantity';
  postCartWithQuantityUrl = this.baseUrl + 'addWithQuantity';
  deleteProductFromCartUrl = this.baseUrl + 'deleteFromCart/';
  updateQuantityOfProductUrl = this.baseUrl + 'updateQuantityOfAProductInACart';

  constructor(private http: HttpClient) { }

  private refreshCartValue = new Subject<void>();

  get getRefreshCartValue() {
    return this.refreshCartValue;
  }

  addToCartWithQuantity(cartDetails) {
    return this.http.post<any>(this.postCartWithQuantityUrl, cartDetails).pipe(
      tap(() => {
        this.refreshCartValue.next();
      })
    );
  }

  deleteProductFromCart(cartDetailId: any) {
    return this.http.delete<any>(`${this.deleteProductFromCartUrl}${cartDetailId}`).pipe(
      tap(() => {
        console.log("Go to update navbar...");
        this.refreshCartValue.next();
      })
    );
  }

  getCart() {
    return this.http.get<any>(this.getUserCartUrl);
  }

  getQuantityOfCart() {
    return this.http.get<any>(this.getQuantityOfCartUrl);
  }

  updateQuantityOfAProductInACart(cartForm) {
    return this.http.put<any>(this.updateQuantityOfProductUrl, cartForm).pipe(
      tap(() => {
        this.refreshCartValue.next();
      })
    );
  }
}
