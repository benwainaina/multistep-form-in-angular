import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MultiStepFormComponent } from '../../projects/multi-step-form/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MultiStepFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'multistep-form-in-angular';
}
