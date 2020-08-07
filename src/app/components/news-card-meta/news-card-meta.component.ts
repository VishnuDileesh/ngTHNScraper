import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-card-meta',
  templateUrl: './news-card-meta.component.html',
  styleUrls: ['./news-card-meta.component.css'],
})
export class NewsCardMetaComponent implements OnInit {
  @Input() news;
  @Input() category;

  constructor() {}

  ngOnInit(): void {}
}
