import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFeatureConfirmationModalComponent } from './delete-feature-confirmation-modal.component';

describe('DeleteConfirmationModalComponent', () => {
  let component: DeleteFeatureConfirmationModalComponent;
  let fixture: ComponentFixture<DeleteFeatureConfirmationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteFeatureConfirmationModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteFeatureConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
