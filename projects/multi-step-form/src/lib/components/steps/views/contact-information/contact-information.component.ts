import { Component } from '@angular/core';
import { BaseStepComponent } from '../base.step.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'lib-contact-information',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-information.component.html',
})
export class ContactInformationComponent extends BaseStepComponent {
  constructor() {
    super();
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      linkedin: new FormControl('https://www.linkedin.com/in/benwainaina/', [
        Validators.required,
      ]),
      instagram: new FormControl('https://www.instagram.com/the__b_a_e/', [
        Validators.required,
      ]),
      twitter: new FormControl('https://x.com/the__b_a_e', [
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {
    this.initializeFormWithSavedFields(this.form);
    this.registerFormFields(this.form);
    this.listenForFormChanges(this.form);
  }
}
