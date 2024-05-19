import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from '../../component/box/box.component';

@Component({
  selector: 'experience',
  standalone: true,
  imports: [CommonModule, BoxComponent],
  templateUrl: './experience.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {}
