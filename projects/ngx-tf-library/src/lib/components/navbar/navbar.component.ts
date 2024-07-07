import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() isExpanded: boolean = false;
  @Input() prodBannerUrl: string = "";

  constructor() {
  }

  toggleNavbar(isToExpand?: boolean): void {

    if (typeof isToExpand !== 'boolean') {
      isToExpand = !this.isExpanded;
    }

    this.isExpanded = isToExpand;
  }
}
