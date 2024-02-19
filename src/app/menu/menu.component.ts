import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { menuItem } from '../menuItem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() menuItems: menuItem[] = [];
  @Output() onFade = new EventEmitter<any>();

  fadeOuts: boolean[] = [false, false, false];
  puffOuts: boolean[] = [false, false, false];

  constructor(private router: Router) {}

  onMountainClick(index: number) {
    // Set fadeOuts to true for indexes not equal to index
    this.fadeOuts = this.fadeOuts.map((value, i) => (i !== index ? true : value));
    // Set puffOuts to true for index
    this.puffOuts = this.puffOuts.map((value, i) => (i === index ? true : value));

    this.onFade.emit();

    this.timeoutNav(this.menuItems[index].route);
  }

  isFadeOut(index: number) {
    return this.fadeOuts[index];
  }

  isPuffOut(index: number) {
    return this.puffOuts[index];
  }

  timeoutNav(route: string) {
    setTimeout(() => {
      this.router.navigate([route]);
    }, 1500);
  }
}
