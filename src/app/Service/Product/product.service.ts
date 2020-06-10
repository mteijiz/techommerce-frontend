import { Injectable } from '@angular/core';
import { Product } from 'src/app/Model/Product/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  
  baseUrl = 'http://localhost:8080' + '/products/';

  postProductUrl = this.baseUrl + 'add';
  getAllProductsUrl = this.baseUrl + 'getAll';
  updateProductStateUrl = this.baseUrl + 'updateState';

  constructor(
    private http: HttpClient
  ) { }

  addProduct(product: any) : Observable<any>{
    return this.http.post<any>(this.postProductUrl, product);
  }

  getAllProducts() : Observable<any>{
    return this.http.get<Product[]>(this.getAllProductsUrl);
  }

  updateProductState(product: Product) {
   return this.http.put<any>(this.updateProductStateUrl, product);
  }

}
