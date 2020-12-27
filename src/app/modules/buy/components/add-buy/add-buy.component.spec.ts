import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBuyComponent } from './add-buy.component';

describe('AddBuyComponent', () => {
  let component: AddBuyComponent;
  let fixture: ComponentFixture<AddBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
