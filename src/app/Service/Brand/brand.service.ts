import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/Model/Brand/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  

  baseUrl = 'http://localhost:8080'+'/brands/';

  getAllUrl = this.baseUrl + 'getAll';
  postUrl = this.baseUrl + 'add';
  updateUrl = this.baseUrl + 'update';
  updateStateUrl = this.baseUrl + 'changeStatus';
  getActiveUrl = this.baseUrl + 'getActive';

  constructor(private http : HttpClient) { }

  getAllBrands() : Observable<any>{
    return this.http.get<Brand[]>(this.getAllUrl);
  }

  addBrand(brandToAdd) : Observable<any>{
    return this.http.post<any>(this.postUrl, brandToAdd)
  }

  updateBrand(brandToUpdate) : Observable<any>{
    return this.http.put<any>(this.updateUrl, brandToUpdate);
  }

  updateBrandState(brandToUpdate) : Observable<any>{
    return this.http.put<any>(this.updateStateUrl, brandToUpdate);
  }

  getAllActiveBrands() {
    return this.http.get<Brand[]>(this.getActiveUrl);
  }
}
