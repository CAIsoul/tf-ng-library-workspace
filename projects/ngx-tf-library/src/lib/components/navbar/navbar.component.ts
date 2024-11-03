import { CommonModule } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NavbarMenuItem } from './navbar.model';

@Component({
  selector: 'lib-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NavbarComponent {
  @Input() isExpanded: boolean = false;
  @Input() prodBannerUrl: string = "";
  @Input() isSearchEnabled: boolean = true;
  @Input() menuItems: Array<NavbarMenuItem> = [];
  @Input() footItems: Array<NavbarMenuItem> = [];

  constructor() {
  }

  toggleNavbar(isToExpand?: boolean): void {

    if (typeof isToExpand !== 'boolean') {
      isToExpand = !this.isExpanded;
    }

    this.isExpanded = isToExpand;
  }

  onMenuItemClick($event: Event, action: Function | undefined) {
    action && action();
  }

  onFootEllipsisBtnClick($event: Event) {

  }
}
