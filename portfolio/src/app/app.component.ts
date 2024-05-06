import { Component, inject } from "@angular/core";
import {
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet,
} from "@angular/router";
import { FooterComponent } from "./bento/footer/footer.component";
import { toSignal } from "@angular/core/rxjs-interop";
import { RouteMeta } from "@analogjs/router";
import { AsyncPipe, JsonPipe } from "@angular/common";
import { filter, map } from "rxjs";

export const routeMeta: RouteMeta = {
  data: {
    breadcrumb: "Docs",
  },
};

@Component({
  selector: "portfolio-root",
  standalone: true,
  imports: [
    RouterOutlet,
    AsyncPipe,
    JsonPipe,
    FooterComponent,
    RouterModule
  ],
  template: `
    <router-outlet></router-outlet>
  `,
  host:{
    class:"w-dvw h-dvh flex place-items-center place-content-center"
  }
})
export class AppComponent {
  private readonly route = inject(Router);
  private readonly currentRoute$ = this.route.events.pipe(
    filter((event: any) => event instanceof NavigationEnd),
    map((value) => value.url)
  );

  url = toSignal(this.currentRoute$);
}
