import { AsyncPipe, NgClass } from '@angular/common';
import { Component, inject, ViewChild, ViewContainerRef } from '@angular/core';
import { MultiStepFormService } from '../../multi-step-form.service';
import { firstValueFrom, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'lib-steps',
  standalone: true,
  imports: [NgClass, AsyncPipe],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.scss',
})
export class StepsComponent {
  @ViewChild('outlet', { static: true, read: ViewContainerRef })
  private _outlet!: ViewContainerRef;
  private _onDestroy$: Subject<boolean> = new Subject<boolean>();

  public multiStepFormService: MultiStepFormService =
    inject(MultiStepFormService);

  ngOnInit(): void {
    this._listenForPageToRender();
  }

  private _listenForPageToRender(): void {
    this.multiStepFormService
      .getCurrentUserStep()
      .pipe(takeUntil(this._onDestroy$))
      .subscribe({
        next: (step) => {
          if (this._outlet) {
            /**
             * first clear the currently rendered step
             */
            this._outlet.clear();
          }
          /**
           * now render the appropriate step
           */
          this._outlet.createComponent(step.component);
        },
      });
  }

  public async navigateToStep(direction: 'next' | 'previous') {
    if (direction === 'previous') {
      if (this.multiStepFormService.getCurrentUserStepIndex() !== 0) {
        this._doNavigate(
          this.multiStepFormService.getCurrentUserStepIndex() - 1
        );
      }
    } else {
      const currentStepIsValid = await firstValueFrom(
        this.multiStepFormService.getCurrentStepIsValid()
      );
      if (currentStepIsValid) {
        if (
          this.multiStepFormService.getCurrentUserStepIndex() ===
          this.multiStepFormService.getFormSteps().length - 1
        ) {
          this._submitForm();
        } else {
          this._doNavigate(
            this.multiStepFormService.getCurrentUserStepIndex() + 1
          );
        }
      }
    }
  }

  private _doNavigate(toPage: number): void {
    this.multiStepFormService.setCurrentUserStep(toPage);
  }

  private _submitForm(): void {
    const multiStepForm = this.multiStepFormService.getMultistepFormValue();
    console.log('Steps values ->', multiStepForm);
    let flattenedForm: { [field: string]: any } = {};
    for (const step in multiStepForm) {
      flattenedForm = { ...flattenedForm, ...multiStepForm[step] };
    }
    console.log('To Backend ->', flattenedForm);
  }
}
