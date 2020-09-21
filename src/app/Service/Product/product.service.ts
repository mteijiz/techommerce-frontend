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
  getActiveProductsUrl = this.baseUrl + 'getActive';
  updateProductStateUrl = this.baseUrl + 'updateState';
  updateProductUrl = this.baseUrl + 'update'; 
  addVoteToProductUrl = this.baseUrl + 'addVote';
  getProductByIdUrl = this.baseUrl + 'getById/';
  getProductsByFilterUrl = this.baseUrl + 'filter';

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

  getAllActiveProducts() {
    return this.http.get<Product[]>(this.getActiveProductsUrl);
  }

  updateProduct(product: Product) {
    return this.http.put<any>(this.updateProductUrl, product);
  }

  addVoteToProduct(voteOfProduct: any) {
    return this.http.put<any>(this.addVoteToProductUrl, voteOfProduct);
  }

  getProductById(productId: any) {
    return this.http.get<any>(`${this.getProductByIdUrl}${productId}`);
  }

  getProductsByFilter(filter){
    console.log(filter);
    return this.http.post<any>(this.getProductsByFilterUrl, filter);
  }
}
