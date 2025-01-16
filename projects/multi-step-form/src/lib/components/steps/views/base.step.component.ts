import { inject, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MultiStepFormService } from '../../../multi-step-form.service';
import { filter, firstValueFrom, Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseStepComponent {
  public form!: FormGroup;
  protected multiStepFormService: MultiStepFormService =
    inject(MultiStepFormService);
  private _onDestroy$: Subject<boolean> = new Subject<boolean>();
  private _currentStepKey!: string;

  protected async listenForFormChanges(formRef: FormGroup) {
    const currentStep = await this._getCurrentStep();
    /**
     * check if the form is valid in the first run, should the user have
     * navigated to and fro the current view
     */
    this.multiStepFormService.setCurrentStepIsValid(formRef.valid);

    formRef.valueChanges.pipe(takeUntil(this._onDestroy$)).subscribe({
      next: (formValue) => {
        // update the regerenced multistep form entry with this form's
        // values
        for (const field in formValue) {
          this.multiStepFormService.updateFieldForm(
            currentStep.key,
            field,
            formValue[field]
          );
        }

        // update the form's validity
        this.multiStepFormService.setCurrentStepIsValid(formRef.valid);
      },
    });
  }

  protected async initializeFormWithSavedFields(formRef: FormGroup) {
    const currentStep = await this._getCurrentStep();
    this._currentStepKey = currentStep.key;
    const currentStepFieldValues = this.multiStepFormService.getStepFieldValues(
      currentStep.key
    );
    for (const field in currentStepFieldValues) {
      formRef.patchValue({ [field]: currentStepFieldValues[field] });
    }
  }

  protected async registerFormFields(formRef: FormGroup) {
    const currentStep = await this._getCurrentStep();
    this.multiStepFormService.addStepToForm(currentStep.key, formRef.value);
  }

  private _getCurrentStep() {
    return firstValueFrom(this.multiStepFormService.getCurrentUserStep());
  }

  public onResetCurrentForm(): void {
    this.form.reset();
    this.multiStepFormService.resetCurrentForm(this._currentStepKey);
  }
}
