import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRegisterationComponent } from './product-registeration.component';

describe('ProductRegisterationComponent', () => {
  let component: ProductRegisterationComponent;
  let fixture: ComponentFixture<ProductRegisterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductRegisterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRegisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
