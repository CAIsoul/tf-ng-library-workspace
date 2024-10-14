import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ApplicationTermService } from '../../services/application-term.service';
import { CustomKendogridComponent } from '../../../public-api';

@Component({
  selector: 'lib-base-grid-page',
  standalone: true,
  imports: [CustomKendogridComponent],
  templateUrl: './base-grid-page.component.html',
  styleUrl: './base-grid-page.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
})
export class BaseGridPageComponent {

  @Input() dataType: string = "";
  @Input() addNewEnabled: boolean = false;
  @Input() gridOptions: any = {};

  get pageTitle(): string {
    return this.appTermService.getPluralTerm(this.dataType)?.toUpperCase() ?? "";
  }

  constructor(
    private appTermService: ApplicationTermService
  ) {
  }
}
