import { Component, HostListener, inject } from '@angular/core';

import { BaseComponent } from '../../core/base-component';
import { ContactModalComponent } from '../../features/modals/contact-modal-component/contact-modal-component';
import { CvModalComponent } from '../../features/modals/cv-modal-component/cv-modal-component';
import { MatDialog } from '@angular/material/dialog';
import { ThemeService } from '../../core/theme-service';
import { strings } from './strings';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.scss',
})
export class MenuComponent extends BaseComponent<typeof strings> {
  private dialog = inject(MatDialog);
  public themeService = inject(ThemeService);

  constructor() {
    super(strings);
  }

  openContact() {
    this.dialog.open(ContactModalComponent, {
      width: '90%',
      disableClose: true,
      panelClass: 'custom-modal',
    });
  }

  openCv() {
    this.dialog.open(CvModalComponent, {
      width: '60vw',
      maxWidth: '80vw',
      height: '80vh',
      panelClass: 'custom-modal',
    });
  }

  scroll = 0;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scroll = window.scrollY;
  }
}
