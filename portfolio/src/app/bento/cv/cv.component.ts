import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxComponent } from '../../component/box/box.component';
import { ionDocument } from '@ng-icons/ionicons';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
@Component({
  selector: 'cv',
  standalone: true,
  imports: [CommonModule, BoxComponent, NgIconComponent],
  templateUrl: './cv.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [provideIcons({ ionDocument })]
})
export class CvComponent {
  ionDocument = ionDocument;
}
