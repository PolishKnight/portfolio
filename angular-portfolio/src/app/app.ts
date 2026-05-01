import { Component } from '@angular/core';
import { FooterComponent } from './shared/footer-component/footer-component';
import { MenuComponent } from './shared/menu-component/menu-component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
