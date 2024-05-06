import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from '../../common/box/box.component';

@Component({
  selector: 'name',
  standalone: true,
  imports: [CommonModule, BoxComponent],
  templateUrl: './name.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameComponent {}
