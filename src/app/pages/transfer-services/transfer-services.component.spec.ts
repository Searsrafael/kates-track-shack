import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferServicesComponent } from './transfer-services.component';

describe('TransferServicesComponent', () => {
  let component: TransferServicesComponent;
  let fixture: ComponentFixture<TransferServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
