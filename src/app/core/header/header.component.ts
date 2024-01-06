import { Component } from '@angular/core';
import { MaterialModule } from '../../module/material/material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { HeadermenuComponent } from '../headermenu/headermenu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, CommonModule, HeadermenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public isResponsive = false;
  public companyName: string = "TextError Technologies";
  public toggleResponsive() {
    this.isResponsive = !this.isResponsive;
  }
}
