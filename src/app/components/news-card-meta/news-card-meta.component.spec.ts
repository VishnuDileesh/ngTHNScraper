import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCardMetaComponent } from './news-card-meta.component';

describe('NewsCardMetaComponent', () => {
  let component: NewsCardMetaComponent;
  let fixture: ComponentFixture<NewsCardMetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsCardMetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsCardMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
