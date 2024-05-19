import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'box,.box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './box.component.html',
  styles: [''],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host:{
    class: 'flex flex-col w-full border shadow-sm rounded-xl transition border-slate-200 p-4 md:p-5'
  }
})
export class BoxComponent {}
