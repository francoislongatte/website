import { ApplicationConfig } from "@angular/core";
import { provideHttpClient, withFetch } from "@angular/common/http";
import { provideClientHydration } from "@angular/platform-browser";
import { provideFileRouter } from "@analogjs/router";
import {
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling,
} from "@angular/router";
import { provideContent, withMarkdownRenderer } from "@analogjs/content";

export const appConfig: ApplicationConfig = {
  providers: [
    provideFileRouter(
      withInMemoryScrolling({ anchorScrolling: "enabled" }),
      withEnabledBlockingInitialNavigation(),
      withComponentInputBinding()
    ),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideContent(
      withMarkdownRenderer({
        loadMermaid: () => import("mermaid"),
      })
    ),
  ],
};
