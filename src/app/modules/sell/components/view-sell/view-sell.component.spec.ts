import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSellComponent } from './view-sell.component';

describe('ViewSellComponent', () => {
  let component: ViewSellComponent;
  let fixture: ComponentFixture<ViewSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
