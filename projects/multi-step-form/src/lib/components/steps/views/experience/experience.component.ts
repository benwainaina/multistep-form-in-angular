import { Component } from '@angular/core';
import { BaseStepComponent } from '../base.step.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'lib-experience',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent extends BaseStepComponent {
  constructor() {
    super();
    this.form = new FormGroup({
      angular: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(10),
      ]),
      reactandnative: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(10),
      ]),
      python: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(10),
      ]),
      firebase: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(10),
      ]),
    });
  }

  ngOnInit(): void {
    this.initializeFormWithSavedFields(this.form);
    this.registerFormFields(this.form);
    this.listenForFormChanges(this.form);
  }
}
