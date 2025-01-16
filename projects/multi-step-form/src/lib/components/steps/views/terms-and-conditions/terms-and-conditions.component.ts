import { Component } from '@angular/core';
import { BaseStepComponent } from '../base.step.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'lib-terms-and-conditions',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './terms-and-conditions.component.html',
  styleUrl: './terms-and-conditions.component.scss',
})
export class TermsAndConditionsComponent extends BaseStepComponent {
  constructor() {
    super();
    this.form = new FormGroup({
      agree: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.initializeFormWithSavedFields(this.form);
    this.registerFormFields(this.form);
    this.listenForFormChanges(this.form);
  }

  public onConsent(): void {
    this.form.patchValue({ agree: !this.form.get('agree')?.value });
  }
}
