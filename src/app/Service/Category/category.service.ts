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

  constructor(private http:HttpClient) { }

  addCategory(category : Category) : Observable<any>{
    return this.http.post<any>(this.postUrl, category);
  }

  getAllCategories() : Observable<any>{
    return this.http.get<Category[]>(this.getAllCategoriesUrl);
  }

}
