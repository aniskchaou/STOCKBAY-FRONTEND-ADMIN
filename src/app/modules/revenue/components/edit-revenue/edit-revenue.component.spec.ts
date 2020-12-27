import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRevenueComponent } from './edit-revenue.component';

describe('EditRevenueComponent', () => {
  let component: EditRevenueComponent;
  let fixture: ComponentFixture<EditRevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRevenueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
