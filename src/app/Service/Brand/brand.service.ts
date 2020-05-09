import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/Model/Brand/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  baseUrl = 'http://localhost:8080';

  getAllUrl = this.baseUrl + '/brands/getAll';
  postUrl = this.baseUrl + '/brands/add'

  constructor(private http : HttpClient) { }

  getAllBrands() : Observable<any>{
    return this.http.get<Brand[]>(this.getAllUrl);
  }

  addBrand(brandToAdd) : Observable<any>{
    return this.http.post<any>(this.postUrl, brandToAdd)
  }
}
