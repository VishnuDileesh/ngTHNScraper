import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  fetchCategories(): Observable<any> {
    return this.http.get('https://thn-scraper.herokuapp.com/api/v1/categories');
  }
}
