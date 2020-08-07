import { Component, OnInit } from '@angular/core';
import { AllnewsService } from '../../allnews.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private allnews: AllnewsService) {}

  ngOnInit(): void {
    this.allnews.fetchAllNews().subscribe((data) => console.log(data));
  }
}
