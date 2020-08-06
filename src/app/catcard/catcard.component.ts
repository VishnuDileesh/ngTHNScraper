import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-catcard',
  templateUrl: './catcard.component.html',
  styleUrls: ['./catcard.component.css'],
})
export class CatcardComponent implements OnInit {
  @Input() categoryTitle: string;

  constructor() {}

  ngOnInit(): void {}
}
