import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../categories.service';
import { AllnewsService } from '../../allnews.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  categoryList: string[];
  allNews: any;

  constructor(
    private categories: CategoriesService,
    private allnews: AllnewsService
  ) {}

  ngOnInit(): void {
    this.categories
      .fetchCategories()
      .subscribe((data) => (this.categoryList = data));
    this.allnews.fetchAllNews().subscribe((data) => (this.allNews = data));
  }
}
