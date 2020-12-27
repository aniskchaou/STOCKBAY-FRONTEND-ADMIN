import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIncomeComponent } from './edit-income.component';

describe('EditIncomeComponent', () => {
  let component: EditIncomeComponent;
  let fixture: ComponentFixture<EditIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
