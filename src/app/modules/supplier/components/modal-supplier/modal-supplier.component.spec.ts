import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSupplierComponent } from './modal-supplier.component';

describe('ModalSupplierComponent', () => {
  let component: ModalSupplierComponent;
  let fixture: ComponentFixture<ModalSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSupplierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
