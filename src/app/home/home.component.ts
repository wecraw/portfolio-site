import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { menuItem } from '../menuItem';

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  fadeHeaderFooter: boolean = false;

  menuItems: menuItem[] = [
    { label: 'About', route: '/about', altitude: '14,423 ft.' },
    { label: 'Resume', route: '/resume', altitude: '29,032 ft.' },
    { label: 'Portfolio', route: '/portfolio', altitude: '20,311 ft.' },
  ];

  onFadeHeaderFooter() {
    this.fadeHeaderFooter = true;
  }
}
