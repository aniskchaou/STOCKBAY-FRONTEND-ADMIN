import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCategoryComponent } from './view-category.component';

describe('ViewCategoryComponent', () => {
  let component: ViewCategoryComponent;
  let fixture: ComponentFixture<ViewCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
