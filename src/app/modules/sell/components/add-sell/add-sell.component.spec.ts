import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSellComponent } from './add-sell.component';

describe('AddSellComponent', () => {
  let component: AddSellComponent;
  let fixture: ComponentFixture<AddSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
