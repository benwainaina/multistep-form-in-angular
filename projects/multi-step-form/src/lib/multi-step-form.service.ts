/**
 * This service will only be serving the role of storing the state of
 * the multistep form.
 *
 * Each and every individual component will be charged with the
 * responsibility of validating it's input.
 */

import { Injectable } from '@angular/core';
import { IStep } from './interfaces';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Steps } from './data';

@Injectable({
  providedIn: 'root',
})
export class MultiStepFormService {
  private _multiStepForm: { [view: string]: { [field: string]: any } } = {};
  private _currentUserStep$: BehaviorSubject<IStep>;
  private _currentUserStepIndex: number = 0;
  private _registeredSteps: Array<IStep> = Steps;
  private _currentStepIsValid$: BehaviorSubject<boolean>;

  constructor() {
    this._currentUserStep$ = new BehaviorSubject(
      this._registeredSteps[this._currentUserStepIndex]
    );
    this._currentStepIsValid$ = new BehaviorSubject(false);
  }

  public addStepToForm(
    step: string,
    stepFields: { [field: string]: any }
  ): void {
    if (!this._multiStepForm[step]) {
      this._multiStepForm[step] = stepFields;
    }
  }

  public updateFieldForm(step: string, field: string, value: any): void {
    this._multiStepForm[step][field] = value;
  }

  public getFormFields(): any {
    return this._multiStepForm;
  }

  public getFormSteps(): Array<IStep> {
    return this._registeredSteps;
  }

  public getCurrentUserStep(): Observable<IStep> {
    return this._currentUserStep$;
  }

  public getCurrentUserStepIndex(): number {
    return this._currentUserStepIndex;
  }

  public setCurrentUserStep(step: number): void {
    this._currentUserStepIndex = step;
    this._currentUserStep$.next(
      this._registeredSteps[this._currentUserStepIndex]
    );
  }

  public getCurrentStepIsValid(): Observable<boolean> {
    return this._currentStepIsValid$;
  }

  public setCurrentStepIsValid(status: boolean): void {
    this._currentStepIsValid$.next(status);
  }

  public getStepFieldValues(stepKey: string) {
    return this._multiStepForm[stepKey];
  }
}
