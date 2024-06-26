import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageModule } from './pages/page.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'tf-ng-playground';
}
