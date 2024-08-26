import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MultiStepFormService {
  private _multiStepForm: { [view: string]: { [field: string]: any } } = {};

  public addStepToForm(
    step: string,
    stepFields: { [field: string]: any }
  ): void {
    if (!this._multiStepForm[step]) {
      this._multiStepForm[step] = stepFields;
    }
  }

  public updateFieldForm(step: string, field: string, value: any): void {
    if (this._multiStepForm[step] && this._multiStepForm[field]) {
      this._multiStepForm[step][field] = value;
    }
  }

  public getFormFields(): any {
    return this._multiStepForm;
  }
}
