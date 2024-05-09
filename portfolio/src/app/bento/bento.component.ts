import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { BoxComponent } from "../common/box/box.component";
import { ExperienceComponent } from "./experience/experience.component";
import { NameComponent } from "./name/name.component";
import { LinkedinComponent } from "./linkedin/linkedin.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { MapComponent } from "./map/map.component";
import { ProjectComponent } from "./project/project.component";
import { CvComponent } from "./cv/cv.component";
import { GitComponent } from "./git/git.component";
import { TechnologyComponent } from "./technology/technology.component";

@Component({
  selector: "bento",
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FooterComponent,
    BoxComponent,
    ProjectComponent,
    NameComponent,
    LinkedinComponent,
    ExperienceComponent,
    CalendarComponent,
    MapComponent,
    CvComponent,
    GitComponent,
    TechnologyComponent
  ],
  templateUrl: "./bento.component.html",
  styleUrl: "./bento.component.scss",
  host: {
    class:
      "grid w-dvw top-0 gap-4 grid-areas-layoutMobile md:grid-areas-layout auto-cols-fr auto-rows-min p-[1vw]",
  },
})
export class BentoComponent {}
