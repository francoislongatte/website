import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from '../../component/box/box.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionLogoLinkedin } from '@ng-icons/ionicons';
@Component({
  selector: 'linkedin',
  standalone: true,
  imports: [CommonModule, BoxComponent, NgIconComponent],
  templateUrl: './linkedin.component.html',
  styles: [],
  viewProviders: [provideIcons({ ionLogoLinkedin })],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class LinkedinComponent {
  ionLogoLinkedin = ionLogoLinkedin;
}
