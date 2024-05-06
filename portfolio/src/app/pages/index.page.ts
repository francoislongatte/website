import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { injectContentFiles } from '@analogjs/content';
import { BentoComponent } from '../bento/bento.component';


@Component({
  standalone: true,
  imports: [BentoComponent],
  template: `<bento />`,
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