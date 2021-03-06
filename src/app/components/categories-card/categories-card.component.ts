import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categories-card',
  templateUrl: './categories-card.component.html',
  styleUrls: ['./categories-card.component.css'],
})
export class CategoriesCardComponent implements OnInit {
  @Input() category;
  @Input() allNews;

  constructor() {}

  ngOnInit(): void {}
}
