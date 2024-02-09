import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  fadeOuts: boolean[] = [false, false, false];
  puffOuts: boolean[] = [false, false, false];

  onMountainClick(index: number) {
    // Set fadeOuts to true for indexes not equal to index
    this.fadeOuts = this.fadeOuts.map((value, i) => (i !== index ? true : value));
    // Set puffOuts to true for index
    this.puffOuts = this.puffOuts.map((value, i) => (i === index ? true : value));
  }

  isFadeOut(index: number) {
    return this.fadeOuts[index];
  }

  isPuffOut(index: number) {
    return this.puffOuts[index];
  }
}
