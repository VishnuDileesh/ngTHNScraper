import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryallnewsService } from '../../services/categoryallnews.service';

@Component({
  selector: 'app-categorynews',
  templateUrl: './categorynews.component.html',
  styleUrls: ['./categorynews.component.css'],
})
export class CategorynewsComponent implements OnInit {
  category = {
    slug: '',
  };
  routeCategory: string;
  newsList: any;

  constructor(
    private route: ActivatedRoute,
    private categoryAllNews: CategoryallnewsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.routeCategory = params.get('categoryslug');

      this.category.slug = this.routeCategory;

      this.categoryAllNews
        .fetchCategoryAllNews(this.routeCategory)
        .subscribe((data) => (this.newsList = data));
    });
  }
}
