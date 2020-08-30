import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  baseUrl = 'http://localhost:8080' + '/reviews/';

  addReviewUrl = this.baseUrl + 'add';

  constructor(private http : HttpClient) { }

  addReview(review) : Observable<any>{
    return this.http.post<any>(this.addReviewUrl, review);
  }
}
