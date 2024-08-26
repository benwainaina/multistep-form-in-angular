import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsActionsComponent } from './steps-actions.component';

describe('StepsActionsComponent', () => {
  let component: StepsActionsComponent;
  let fixture: ComponentFixture<StepsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepsActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
