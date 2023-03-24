import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureTreeComponent } from './feature-tree.component';

describe('FeatureTreeComponent', () => {
  let component: FeatureTreeComponent;
  let fixture: ComponentFixture<FeatureTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
