import { Component, inject } from '@angular/core';
import { MultiStepFormService } from '../../multi-step-form.service';
import { AsyncPipe, NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'lib-steps-indicator',
  standalone: true,
  imports: [NgFor, AsyncPipe, NgClass],
  templateUrl: './steps-indicator.component.html',
  styleUrl: './steps-indicator.component.scss',
})
export class StepsIndicatorComponent {
  public multistepFromService: MultiStepFormService =
    inject(MultiStepFormService);
}
