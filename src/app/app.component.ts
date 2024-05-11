import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarModule } from './nav-bar/nav-bar.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projectIGI';
}
