import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorynewsComponent } from './categorynews.component';

describe('CategorynewsComponent', () => {
  let component: CategorynewsComponent;
  let fixture: ComponentFixture<CategorynewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorynewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorynewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
