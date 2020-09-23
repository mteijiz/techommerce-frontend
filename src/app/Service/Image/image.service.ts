import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  baseUrl = 'http://localhost:8080' + '/images/';

  postImageUrl = this.baseUrl + 'upload/';
  getProductImageUrl = this.baseUrl + 'get/';
  deleteImageUrl = this.baseUrl + 'delete/';
  postMainImageUrl = this.baseUrl + 'uploadMain/';
  getProductMainImageUrl = this.baseUrl + 'getMain/';
  updateMainImage = this.baseUrl + 'updateMainImage/';

  constructor(private http: HttpClient) { }

  uploadImage(imageData: FormData, productId: number): Observable<any> {
    return this.http.post<any>(`${this.postImageUrl}${productId}`, imageData);
  }

  deleteImage(imageId) : Observable<any>{
    return this.http.delete<any>(`${this.deleteImageUrl}${imageId}`);
  }

  uploadMainImage(mainImageFormData: FormData, productId: any) {
    return this.http.post<any>(`${this.postMainImageUrl}${productId}`, mainImageFormData);
  }

  changeMainImage(imageForm: any) : Observable<any> {
    return this.http.put<any>(this.updateMainImage, imageForm);
  }
}
