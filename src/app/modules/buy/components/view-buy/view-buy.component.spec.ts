import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBuyComponent } from './view-buy.component';

describe('ViewBuyComponent', () => {
  let component: ViewBuyComponent;
  let fixture: ComponentFixture<ViewBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
