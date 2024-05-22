import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from '../../component/box/box.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionLogoGithub } from '@ng-icons/ionicons';

@Component({
  selector: 'git',
  standalone: true,
  imports: [CommonModule, BoxComponent, NgIconComponent],
  templateUrl: './git.component.html',
  styles: [],
  viewProviders: [provideIcons({ ionLogoGithub })],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GitComponent {
  ionLogoGithub = ionLogoGithub
}
