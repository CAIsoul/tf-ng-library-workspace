import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

const DEFAULT_SUBTITLE = "Loading";

@Component({
  selector: 'lib-loading-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-indicator.component.html',
  styleUrl: './loading-indicator.component.scss'
})
export class LoadingIndicatorComponent {
  @Input() isVisible: boolean = false;
  @Input() subtitle: string | undefined;

  constructor() {
    if (this.subtitle === undefined) {
      this.subtitle = DEFAULT_SUBTITLE;
    }
  }
}
