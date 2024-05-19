import { provideContent, withMarkdownRenderer } from "@analogjs/content";
import { provideFileRouter } from "@analogjs/router";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { ApplicationConfig } from "@angular/core";
import { provideClientHydration } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import {
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling,
} from "@angular/router";

export const appConfig: ApplicationConfig = {
  providers: [
    provideFileRouter(
      withInMemoryScrolling({ anchorScrolling: "enabled" }),
      withEnabledBlockingInitialNavigation(),
      withComponentInputBinding()
    ),
    provideAnimations(),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideContent(
      withMarkdownRenderer({
        loadMermaid: () => import("mermaid"),
      })
    ),
  ],
};
