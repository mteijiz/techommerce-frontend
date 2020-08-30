import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/app/Model/Category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  

  baseUrl = 'http://localhost:8080' + '/categories/';
  
  postUrl = this.baseUrl + 'add';
  getAllCategoriesUrl = this.baseUrl + 'getAll';
  updateUrl = this.baseUrl + 'update';
  updateStateUrl = this.baseUrl + 'updateState';
  getActiveCategoriesUrl = this.baseUrl + 'getActive'

  constructor(private http:HttpClient) { }

  addCategory(category : Category) : Observable<any>{
    return this.http.post<any>(this.postUrl, category);
  }

  getAllCategories() : Observable<any>{
    return this.http.get<Category[]>(this.getAllCategoriesUrl);
  }

  updateCategory(category : Category) : Observable<any>{
    return this.http.put<any>(this.updateUrl, category);
  }
  
  updateCategoryState(category : Category) : Observable<any>{
    return this.http.put<any>(this.updateStateUrl, category);
  }

  getAllActiveCategory() {
    return this.http.get<Category[]>(this.getActiveCategoriesUrl);
  }

}
