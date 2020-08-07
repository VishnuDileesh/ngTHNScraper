import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryallnewsService {
  constructor(private http: HttpClient) {}

  fetchCategoryAllNews(category: string): Observable<any> {
    return this.http.get(
      `https://thn-scraper.herokuapp.com/api/v1/${category}/news`
    );
  }
}
