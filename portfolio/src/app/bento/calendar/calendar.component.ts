import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from '../../component/box/box.component';

@Component({
  selector: 'calendar',
  standalone: true,
  imports: [CommonModule, BoxComponent],
  templateUrl: './calendar.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent {}
