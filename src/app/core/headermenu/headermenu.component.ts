import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserNinja, faMapLocation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-headermenu',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, MatIconModule, MatChipsModule, FontAwesomeModule],
  templateUrl: './headermenu.component.html',
  styleUrl: './headermenu.component.scss'
})
export class HeadermenuComponent {
  public name: string = "Harshal Raverkar";
  public email: string = "harshal.raverkar@gmail.com";
  public contact: string = "Hyderabad, India";
  faUserNinja = faUserNinja;
  faMapLocation = faMapLocation;
}
