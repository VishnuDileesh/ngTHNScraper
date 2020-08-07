import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-navheader',
  templateUrl: './navheader.component.html',
  styleUrls: ['./navheader.component.css'],
})
export class NavheaderComponent implements OnInit {
  categories: string[];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService
      .fetchCategories()
      .subscribe((data) => (this.categories = data));
  }
}
