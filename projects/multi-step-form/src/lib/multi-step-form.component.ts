import { Component } from '@angular/core';
import { StepLabelIndicatorComponent } from './components/step-label-indicator/step-label-indicator.component';
import { StepsComponent } from './components/steps/steps.component';
import { StepsIndicatorComponent } from './components/steps-indicator/steps-indicator.component';

@Component({
  selector: 'lib-multi-step-form',
  standalone: true,
  imports: [
    StepLabelIndicatorComponent,
    StepsComponent,
    StepsIndicatorComponent,
  ],
  templateUrl: 'multi-step-form.component.html',
  styleUrl: 'multi-step-form.component.scss',
})
export class MultiStepFormComponent {}
