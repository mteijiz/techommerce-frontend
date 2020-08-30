import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subcategory } from 'src/app/Model/Subcategory/subcategory';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {
  
  baseUrl = 'http://localhost:8080' + '/subcategories/';

  getAllSubcategoriesUrl = this.baseUrl + 'getAll/';
  postSubcategoryUrl = this.baseUrl + 'add/';
  changeStateSubcategoryUrl = this.baseUrl + 'updateState/';
  updateSubcategoryUrl = this.baseUrl + 'update/';
  getSubcategoriesByCategoryUrl = this.baseUrl + 'getByCategory/';
  getActiveSubcategoriesUrl = this.baseUrl + 'getActive';

  constructor(
    private http : HttpClient
  ) { }

  getAllSubcategories() : Observable<any>{
    return this.http.get<Subcategory[]>(this.getAllSubcategoriesUrl);
  }

  addSubcategory(subcategory : Subcategory) : Observable<any>{
    return this.http.post<any>(this.postSubcategoryUrl, subcategory);
  }

  updateSubcategoryState(subcategory: Subcategory) {
    return this.http.put<any>(this.changeStateSubcategoryUrl, subcategory);
  }

  updateSubcategory(subcategory: Subcategory) {
    return this.http.put<any>(this.updateSubcategoryUrl, subcategory);
  }
  
  getSubcategoriesByCategory(categoryId: any): Observable<any> {
   return this.http.get<Subcategory[]>(`${this.getSubcategoriesByCategoryUrl}${categoryId}`);
  }

  getAllActiveSubcategories() {
    return this.http.get<Subcategory[]>(this.getActiveSubcategoriesUrl);
  }
}
