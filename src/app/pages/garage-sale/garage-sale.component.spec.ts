import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageSaleComponent } from './garage-sale.component';

describe('GarageSaleComponent', () => {
  let component: GarageSaleComponent;
  let fixture: ComponentFixture<GarageSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GarageSaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GarageSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
