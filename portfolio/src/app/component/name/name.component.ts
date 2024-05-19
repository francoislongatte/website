import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from '../box/box.component';

@Component({
  selector: 'name',
  standalone: true,
  imports: [CommonModule, BoxComponent],
  templateUrl: './name.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host:{
    class: 'flex items-center justify-center flex-col text-center pt-8 pb-4'
  }
})
export class NameComponent {}
