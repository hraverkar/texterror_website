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
        window.open('https://twitter.com/hraverkar', '_blank')
        break;
      case 'github':
        window.open('https://github.com/hraverkar', '_blank');
        break;
      case 'stackOverflow':
        window.open('https://dev.to/hraverkar', '_blank');
        break;
      case 'medium':
        window.open('https://medium.com/@hraverkar', '_blank');
        break;
      case 'dev':
        window.open('https://dev.to/hraverkar', '_blank');
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com/in/hraverkar', '_blank');
        break;
      case 'google':
        window.open('https://www.google.com/search?sca_esv=596231964&q=Harshal+Raverkar&stick=H4sIAAAAAAAAAOOwesRoyi3w8sc9YSmdSWtOXmNU4-IJSC0qzs8LTk0sSs4QEuNic80rySypFOKR4uLicMvQtbRwLzLmWcQq4JFYVJyRmKMQlFiWWpSdWAQAhLw7HU0AAAA&sa=X&ved=2ahUKEwjstPbvpsmDAxVze2wGHQTrCRsQnJoFegQIFxAH&biw=1536&bih=730&dpr=1.25#ip=1', '_blank');
        break;
    }
  }
}
