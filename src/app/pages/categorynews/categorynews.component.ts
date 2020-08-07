import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryallnewsService } from '../../services/categoryallnews.service';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categorynews',
  templateUrl: './categorynews.component.html',
  styleUrls: ['./categorynews.component.css'],
})
export class CategorynewsComponent implements OnInit {
  category: any;
  routeCategory: string;
  newsList: any;

  constructor(
    private route: ActivatedRoute,
    private categoryAllNews: CategoryallnewsService,
    private categories: CategoriesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.routeCategory = params.get('categoryslug');

      // this.category.slug = this.routeCategory;

      this.categories.fetchCategories().subscribe((data) => {
        this.category = data.filter((cat) => {
          return cat.slug === this.routeCategory;
        });

        this.category = this.category[0];
      });

      this.categoryAllNews
        .fetchCategoryAllNews(this.routeCategory)
        .subscribe((data) => (this.newsList = data));
    });
  }
}
