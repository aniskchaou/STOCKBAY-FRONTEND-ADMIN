import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSaleComponent } from './modal-sale.component';

describe('ModalSaleComponent', () => {
  let component: ModalSaleComponent;
  let fixture: ComponentFixture<ModalSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
