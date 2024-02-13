import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() navRoute: string = '';

  constructor(private router: Router) {}

  nav() {
    if (this.navRoute) {
      this.router.navigate([this.navRoute]);
    }
  }
}
