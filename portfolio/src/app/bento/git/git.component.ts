import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from '../../component/box/box.component';

@Component({
  selector: 'git',
  standalone: true,
  imports: [CommonModule, BoxComponent],
  templateUrl: './git.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GitComponent {}
