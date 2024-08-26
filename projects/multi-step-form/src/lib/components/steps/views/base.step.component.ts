import { ChangeDetectorRef, inject, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MultiStepFormService } from '../../../multi-step-form.service';
import { firstValueFrom, Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseStepComponent {
  public form!: FormGroup;
  protected multiStepFormService: MultiStepFormService =
    inject(MultiStepFormService);
  private _onDestroy$: Subject<boolean> = new Subject<boolean>();

  protected async listenForFormChanges(formRef: FormGroup) {
    const currentStep = await firstValueFrom(
      this.multiStepFormService.getCurrentUserStep()
    );
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

  protected setStepValidity(status: boolean): void {
    this.multiStepFormService.setCurrentStepIsValid(status);
  }

  protected async initializeFormWithSavedFields(formRef: FormGroup) {
    const currentStep = await firstValueFrom(
      this.multiStepFormService.getCurrentUserStep()
    );
    const currentStepFieldValues = this.multiStepFormService.getStepFieldValues(
      currentStep.key
    );
    for (const field in currentStepFieldValues) {
      formRef.patchValue({ [field]: currentStepFieldValues[field] });
    }
  }

  protected async registerFormFields(formRef: FormGroup) {
    const currentStep = await firstValueFrom(
      this.multiStepFormService.getCurrentUserStep()
    );
    this.multiStepFormService.addStepToForm(currentStep.key, formRef.value);
  }
}
