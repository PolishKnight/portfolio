import { Component, HostListener } from '@angular/core';

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
export class App {
  lastScrollTop = 0;
  isHidden = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > this.lastScrollTop && currentScroll > 100) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
}
