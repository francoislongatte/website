import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from '../../common/box/box.component';

@Component({
  selector: 'project',
  standalone: true,
  imports: [CommonModule, BoxComponent],
  templateUrl: './project.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent {}
