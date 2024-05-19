import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from '../../component/box/box.component';

@Component({
  selector: 'linkedin',
  standalone: true,
  imports: [CommonModule, BoxComponent],
  templateUrl: './linkedin.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class LinkedinComponent {}
