import { Component, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BoxComponent } from '../box/box.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroCheckCircle, heroPaperAirplane } from '@ng-icons/heroicons/outline';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'newsletter',
  standalone: true,
  imports: [CommonModule , BoxComponent, NgIconComponent, FormsModule],
  viewProviders: [provideIcons({ heroCheckCircle, heroPaperAirplane })],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss', 
  host:{
    class: 'block container grid grid-cols-8 mx-auto mt-8'
  }
})
export class NewsletterComponent {

  email = '';

  constructor(private http: HttpClient){}

  addEmail(){
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': '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',
      },
      body: JSON.stringify({
        listIds: [5],
        email: this.email
      })
    };
    
    fetch('https://api.brevo.com/v3/contacts', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }
}
