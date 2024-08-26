import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BaseStepComponent } from '../base.step.component';

@Component({
  selector: 'lib-additional-information',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './additional-information.component.html',
})
export class AdditionalInformationComponent extends BaseStepComponent {
  constructor() {
    super();
    this.form = new FormGroup({
      additionalInformation: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.initializeFormWithSavedFields(this.form);
    this.registerFormFields(this.form);
    this.listenForFormChanges(this.form);
  }
}
