import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureDetailsModalComponent } from './feature-details-modal.component';

describe('FeatureDetailsModalComponent', () => {
  let component: FeatureDetailsModalComponent;
  let fixture: ComponentFixture<FeatureDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureDetailsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
