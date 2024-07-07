import { Component } from '@angular/core';
import { CustomKendogridComponent } from 'ngx-tf-library';

@Component({
  selector: 'app-kendogrid-playground',
  standalone: true,
  imports: [CustomKendogridComponent],
  templateUrl: './kendogrid-playground.component.html',
  styleUrl: './kendogrid-playground.component.less'
})
export class KendogridPlaygroundComponent {

}
