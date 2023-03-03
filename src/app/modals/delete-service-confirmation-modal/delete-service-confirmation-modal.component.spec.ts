import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteServiceConfirmationModalComponent } from './delete-service-confirmation-modal.component';

describe('DeleteServiceConfirmationModalComponent', () => {
  let component: DeleteServiceConfirmationModalComponent;
  let fixture: ComponentFixture<DeleteServiceConfirmationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteServiceConfirmationModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteServiceConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
