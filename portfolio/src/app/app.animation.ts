import { trigger, style, animate, transition } from '@angular/animations';

export const showAnimation = trigger(
    'showAnimation', [
      transition(':enter', [
        style({opacity: 0}),
        animate('500ms', style({opacity: 1}))
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('500ms', style({opacity: 0}))
      ])
    ]
  )