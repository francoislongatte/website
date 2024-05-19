import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroCheck } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'success-message',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './successMessage.component.html',
  styleUrl: './successMessage.component.scss',
  viewProviders: [provideIcons({ heroCheck })],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuccessMessageComponent {
  heroCheck = heroCheck;
}
