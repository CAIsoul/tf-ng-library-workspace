import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxTfLibraryComponent } from 'ngx-tf-library';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxTfLibraryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'tf-ng-playground';
}
