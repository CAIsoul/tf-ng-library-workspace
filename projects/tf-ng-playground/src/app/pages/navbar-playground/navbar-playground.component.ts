import { Component } from '@angular/core';
import { NavbarComponent, NavbarMenuItem } from 'ngx-tf-library';

@Component({
  selector: 'navbar-playground',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './navbar-playground.component.html',
  styleUrl: './navbar-playground.component.less'
})
export class NavbarPlaygroundComponent {
  public navbarItems: Array<NavbarMenuItem> = [
    {
      name: "mapcanvas",
      iconUrl: "assets/icons/map_canvas.svg",
      label: "Map Canvas",
      action: () => { alert(1) }
    },
    {
      name: "datagrid",
      iconUrl: "assets/icons/data_grid.svg",
      label: "Data Grids",
      action: () => { alert(2) }
    }
  ];
}
