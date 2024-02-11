import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  fadeOuts: boolean[] = [false, false, false];
  puffOuts: boolean[] = [false, false, false];

  constructor(private router: Router) {}

  onMountainClick(index: number) {
    // Set fadeOuts to true for indexes not equal to index
    this.fadeOuts = this.fadeOuts.map((value, i) => (i !== index ? true : value));
    // Set puffOuts to true for index
    this.puffOuts = this.puffOuts.map((value, i) => (i === index ? true : value));

    if (index === 1) this.resumeNav();
  }

  isFadeOut(index: number) {
    return this.fadeOuts[index];
  }

  anyFadeOut() {
    return this.fadeOuts.some((value) => value);
  }

  isPuffOut(index: number) {
    return this.puffOuts[index];
  }

  resumeNav() {
    setTimeout(() => {
      this.router.navigate(['/resume']);
    }, 1500);
  }
}
