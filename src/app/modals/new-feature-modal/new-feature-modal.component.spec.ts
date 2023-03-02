import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFeatureModalComponent } from './new-feature-modal.component';

describe('NewFeatureModalComponent', () => {
  let component: NewFeatureModalComponent;
  let fixture: ComponentFixture<NewFeatureModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFeatureModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFeatureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
