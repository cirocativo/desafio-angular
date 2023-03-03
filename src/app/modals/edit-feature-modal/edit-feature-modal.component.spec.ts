import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFeatureModalComponent } from './edit-feature-modal.component';

describe('EditFeatureModalComponent', () => {
  let component: EditFeatureModalComponent;
  let fixture: ComponentFixture<EditFeatureModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFeatureModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFeatureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
