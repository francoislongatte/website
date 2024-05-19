import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  signal,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgIconComponent, provideIcons } from "@ng-icons/core";
import { heroPaperAirplane } from "@ng-icons/heroicons/outline";
import { timer } from "rxjs";
import { SuccessMessageComponent } from "../successMessage/successMessage.component";
import { formSubcriptionService } from "./formSubscription.service";
import { showAnimation } from "../../../app.animation";

@Component({
  selector: "form-subcription",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgIconComponent,
    SuccessMessageComponent,
  ],
  templateUrl: "./formSubcription.component.html",
  styleUrl: "./formSubcription.component.scss",
  viewProviders: [provideIcons({ heroPaperAirplane })],
  providers: [formSubcriptionService],
  animations: [showAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSubcriptionComponent {
  private changeDetector = inject(ChangeDetectorRef);
  private formSubcriptionService = inject(formSubcriptionService);

  email = signal("");
  successMessage = signal(false);
  errorMessage = signal("");

  heroPaperAirplane = heroPaperAirplane;

  addEmail() {
    this.formSubcriptionService.addContact(this.email()).subscribe({
      next: () => {
        this.successMessage.set(true);
        this.email.set("");
        timer(10000).subscribe(() => this.removeMessageSuccess());
      },
      error: (err) => {
        this.errorMessage.set(err.error.message);
        timer(3000).subscribe(() => this.removeMessageError());
      },
    });
  }

  private removeMessageError() {
    this.errorMessage.set("");
    this.changeDetector.detectChanges();
  }

  private removeMessageSuccess() {
    this.successMessage.set(false);
    this.changeDetector.detectChanges();
  }
}
