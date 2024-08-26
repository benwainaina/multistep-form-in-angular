import { AsyncPipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MultiStepFormService } from '../../multi-step-form.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'lib-steps',
  standalone: true,
  imports: [NgClass, AsyncPipe],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.scss',
})
export class StepsComponent {
  public multiStepFormService: MultiStepFormService =
    inject(MultiStepFormService);

  public async navigateToStep(direction: 'next' | 'previous') {
    if (direction === 'previous') {
      if (this.multiStepFormService.getCurrentUserStepIndex() !== 0) {
        this._doNavigate(
          this.multiStepFormService.getCurrentUserStepIndex() - 1
        );
      }
    } else {
      const currentStepIsValid = await firstValueFrom(
        this.multiStepFormService.getCurrentStepIsValid()
      );
      if (currentStepIsValid) {
        if (
          this.multiStepFormService.getCurrentUserStepIndex() ===
          this.multiStepFormService.getFormSteps().length - 1
        ) {
          console.log('submit');
        } else {
          this._doNavigate(
            this.multiStepFormService.getCurrentUserStepIndex() + 1
          );
        }
      }
    }
  }

  private _doNavigate(toPage: number): void {
    this.multiStepFormService.setCurrentUserStep(toPage);
  }
}
