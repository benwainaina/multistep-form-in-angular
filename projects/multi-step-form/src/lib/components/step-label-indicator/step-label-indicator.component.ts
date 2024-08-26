import { Component, inject, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IStep } from '../../interfaces';
import { MultiStepFormService } from '../../multi-step-form.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'lib-step-label-indicator',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './step-label-indicator.component.html',
  styleUrl: './step-label-indicator.component.scss',
})
export class StepLabelIndicatorComponent {
  private _multistepFormService: MultiStepFormService =
    inject(MultiStepFormService);
  public currentStep$: Observable<IStep>;

  constructor() {
    this.currentStep$ = this._multistepFormService.getCurrentUserStep();
  }
}
