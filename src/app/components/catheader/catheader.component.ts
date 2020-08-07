import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-catheader',
  templateUrl: './catheader.component.html',
  styleUrls: ['./catheader.component.css'],
})
export class CatheaderComponent implements OnInit {
  @Input() categoryName;

  constructor() {}

  ngOnInit(): void {}
}
