import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from '../../component/box/box.component';

@Component({
  selector: 'cv',
  standalone: true,
  imports: [CommonModule, BoxComponent],
  templateUrl: './cv.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvComponent {}
