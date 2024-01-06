import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTwitter, faGithub, faStackOverflow, faMedium, faDev, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FontAwesomeModule, MatButtonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  faTwitter = faTwitter;
  faGithub = faGithub;
  faStackOverflow = faStackOverflow;
  faMedium = faMedium;
  faDev = faDev;
  faLinkedin = faLinkedin;
  faGoogle = faGoogle;

  public onLinkClick(identifier: string) {
    switch (identifier) {
      case 'twitter':
        window.open('https://www.twitter.com/hraverkar', '_blank')
        break;
      case 'github':
        window.open('https://www.github.com/hraverkar', '_blank');
        break;
      case 'stackOverflow':
        window.open('www.linktothepage.com', '_blank');
        break;
      case 'medium':
        window.open('www.linktothepage.com', '_blank');
        break;
      case 'dev':
        window.open('www.linktothepage.com', '_blank');
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com/in/hraverkar', '_blank');
        break;
      case 'google':
        window.open('www.linktothepage.com', '_blank');
        break;
    }
  }
}
