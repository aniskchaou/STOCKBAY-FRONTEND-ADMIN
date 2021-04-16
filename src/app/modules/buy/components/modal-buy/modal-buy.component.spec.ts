import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBuyComponent } from './modal-buy.component';

describe('ModalBuyComponent', () => {
  let component: ModalBuyComponent;
  let fixture: ComponentFixture<ModalBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
