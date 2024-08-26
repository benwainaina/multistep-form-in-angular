/**
 * This service will only be serving the role of storing the state of
 * the multistep form.
 *
 * Each and every individual component will be charged with the
 * responsibility of validating it's input.
 */

import { Injectable } from '@angular/core';
import { IStep } from './interfaces';
import { Observable, of } from 'rxjs';
import { Steps } from './data';

@Injectable({
  providedIn: 'root',
})
export class MultiStepFormService {
  private _multiStepForm: { [view: string]: { [field: string]: any } } = {};
  private _currentUserStep: number = 0;
  private _registeredSteps: Array<IStep> = Steps;

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

  public getCurrentUserStep(): Observable<IStep> {
    return of(this._registeredSteps[this._currentUserStep]);
  }

  public setCurrentUserStep(step: number): void {
    this._currentUserStep = step;
  }
}
