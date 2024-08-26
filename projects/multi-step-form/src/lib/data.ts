import { IStep } from './interfaces';
import { PersonalDetailsComponent } from './components/steps/views/personal-details/personal-details.component';
import { ContactInformationComponent } from './components/steps/views/contact-information/contact-information.component';
import { ExperienceComponent } from './components/steps/views/experience/experience.component';
import { AdditionalInformationComponent } from './components/steps/views/additional-information/additional-information.component';
import { TermsAndConditionsComponent } from './components/steps/views/terms-and-conditions/terms-and-conditions.component';

export const Steps: Array<IStep> = [
  {
    label: 'Personal Details',
    key: 'personal-details',
    component: PersonalDetailsComponent,
  },
  {
    label: 'Contact Information',
    key: 'contact-information',
    component: ContactInformationComponent,
  },
  {
    label: 'Experience',
    key: 'experience',
    component: ExperienceComponent,
  },
  {
    label: 'Additional Information',
    key: 'additional-information',
    component: AdditionalInformationComponent,
  },
  {
    label: 'Terms And Conditions',
    key: 'terms-and-conditions',
    component: TermsAndConditionsComponent,
  },
];
