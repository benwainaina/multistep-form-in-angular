import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MultiStepFormService } from '../../../../multi-step-form.service';
import { BaseStepComponent } from '../base.step.component';

@Component({
  selector: 'lib-personal-details',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './personal-details.component.html',
})
export class PersonalDetailsComponent extends BaseStepComponent {
  constructor() {
    super();
    this.form = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.initializeFormWithSavedFields(this.form);
    this.registerFormFields(this.form);
    this.listenForFormChanges(this.form);
  }
}
