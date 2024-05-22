import { injectContentFiles } from '@analogjs/content';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BentoComponent } from '../bento/bento.component';
import { FooterComponent } from '../component/footer/footer.component';
import { NameComponent } from '../component/name/name.component';
import { NewsletterComponent } from '../component/newsletter/newsletter.component';
@Component({
  standalone: true,
  imports: [NameComponent, BentoComponent, NewsletterComponent,  FooterComponent],
  template: `
    <div class="bg-orange-600 w-full">
      <name />
      <bento />
      <newsletter />
      <footer id="footer"></footer>
    </div>
  `,
})
export default class HomeComponent {
  constructor(private titleService: Title){
    this.titleService.setTitle('portfolio - françois longatte');
  }

  readonly posts = injectContentFiles<any>((contentFile) => {
    return !contentFile.filename.includes('/archived/');
  });
}


// <div class="max-w-5xl mx-auto px-4 xl:px-0 pt-24 lg:pt-32 pb-24">
//       <ul class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         <li *ngFor="let post of posts">
//           <a [routerLink]="['/blog', post.slug]">
//             <card [post]="post"></card>
//           </a>
//         </li>
//       </ul>
//     </div>