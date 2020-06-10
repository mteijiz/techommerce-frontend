import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  _baseUrl = 'http://localhost:8080' + '/images/';

  _postImageUrl = this._baseUrl + 'upload/';
  _getProductImageUrl = this._baseUrl + 'get/';
  _deleteImageUrl = this._baseUrl + 'delete/'

  constructor(private _http: HttpClient) { }

  uploadImage(imageData: FormData, productId: number): Observable<any> {
    return this._http.post<any>(`${this._postImageUrl}${productId}`, imageData);
  }

  getAllProductImages(productId: number): Observable<any> {
    return this._http.get<any>(`${this._getProductImageUrl}${productId}`);
  }

  deleteImage(imageId) : Observable<any>{
    return this._http.delete<any>(`${this._deleteImageUrl}${imageId}`);
  }
}
