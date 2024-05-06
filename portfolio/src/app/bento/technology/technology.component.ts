import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from '../../common/box/box.component';

@Component({
  selector: 'technology',
  standalone: true,
  imports: [CommonModule, BoxComponent],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss',
  host:{
    class: 'flex gap-4'
  }
})
export class TechnologyComponent {}
