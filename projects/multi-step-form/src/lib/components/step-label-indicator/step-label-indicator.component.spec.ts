import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepLabelIndicatorComponent } from './step-label-indicator.component';

describe('StepLabelIndicatorComponent', () => {
  let component: StepLabelIndicatorComponent;
  let fixture: ComponentFixture<StepLabelIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepLabelIndicatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepLabelIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
