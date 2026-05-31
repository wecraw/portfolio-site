import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { menuItem } from '../menuItem';

@Component({
  standalone: false,
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() menuItems: menuItem[] = [];
  @Input() useCompactSize: boolean = false;

  @Output() onFade = new EventEmitter<any>();

  @ViewChild('scene') scene?: ElementRef<HTMLElement>;

  // Camera-zoom state: the whole scene (mountain + labels) zooms toward the
  // clicked label as one static image, so nothing drifts relative to anything.
  zooming = false;
  zoomOrigin = '50% 50%';

  constructor(private router: Router) {}

  onMountainClick(index: number, event?: Event) {
    if (this.zooming) return;

    this.zoomOrigin = this.computeZoomOrigin(event);
    this.zooming = true;

    this.onFade.emit();

    this.timeoutNav(this.menuItems[index].route);
  }

  // Point the camera at the clicked label, expressed as a transform-origin
  // percentage relative to the scene box.
  private computeZoomOrigin(event?: Event): string {
    const sceneEl = this.scene?.nativeElement;
    const target = event?.currentTarget as HTMLElement | undefined;
    if (!sceneEl || !target) return '50% 50%';

    const focus = (target.querySelector('.label') as HTMLElement | null) ?? target;
    const scene = sceneEl.getBoundingClientRect();
    const rect = focus.getBoundingClientRect();

    const x = ((rect.left + rect.width / 2 - scene.left) / scene.width) * 100;
    const y = ((rect.top + rect.height / 2 - scene.top) / scene.height) * 100;
    return `${x}% ${y}%`;
  }

  timeoutNav(route: string) {
    setTimeout(() => {
      this.router.navigate([route]);
    }, 1500);
  }
}
