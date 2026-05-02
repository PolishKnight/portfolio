import { Component, HostListener, inject } from '@angular/core';

import { FooterComponent } from './shared/footer-component/footer-component';
import { MatDialog } from '@angular/material/dialog';
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
  private dialog = inject(MatDialog);

  lastScrollTop = 0;
  isHidden = false;
  private isProgrammaticScroll = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.dialog.openDialogs.length > 0 || this.isProgrammaticScroll) {
      return;
    }

    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > this.lastScrollTop && currentScroll > 100) {
      this.isHidden = true;
    } else {
      this.isHidden = false;
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  disableScrollEffectTemporarily() {
    this.isProgrammaticScroll = true;
    this.isHidden = false;

    setTimeout(() => {
      this.isProgrammaticScroll = false;
      this.lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    }, 1000);
  }
}
