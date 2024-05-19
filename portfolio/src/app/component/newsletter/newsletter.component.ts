import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component
} from "@angular/core";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import {
  heroCheckCircle
} from "@ng-icons/heroicons/outline";
import { BoxComponent } from "../box/box.component";
import { FormSubcriptionComponent } from "./form/formSubcription.component";

@Component({
  selector: "newsletter",
  standalone: true,
  imports: [
    CommonModule,
    BoxComponent,
    NgIconComponent,
    FormSubcriptionComponent,
  ],
  viewProviders: [provideIcons({ heroCheckCircle })],
  templateUrl: "./newsletter.component.html",
  styleUrl: "./newsletter.component.scss",
  host: {
    class: "block container grid grid-cols-8 gap-4 px-4 mx-auto mt-0 md:mt-8",
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsletterComponent {
  heroCheckCircle = heroCheckCircle;
}
