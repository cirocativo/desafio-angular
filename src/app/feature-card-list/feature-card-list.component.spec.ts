import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureCardListComponent } from './feature-card-list.component';

describe('FeatureCardListComponent', () => {
  let component: FeatureCardListComponent;
  let fixture: ComponentFixture<FeatureCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureCardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
