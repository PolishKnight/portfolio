import { Component, EventEmitter, Output, inject } from '@angular/core';

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

  @Output() anchorClicked = new EventEmitter<void>();

  constructor() {
    super(strings);
  }

  changeLanguage() {
    this.langService.toggleLanguage();
    const elements = document.querySelectorAll('.global-section');
    elements.forEach((el) => {
      el.classList.remove('global-section');
      void (el as HTMLElement).offsetWidth;
      el.classList.add('global-section');
    });
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

  onLinkClick() {
    this.anchorClicked.emit();
  }
}
