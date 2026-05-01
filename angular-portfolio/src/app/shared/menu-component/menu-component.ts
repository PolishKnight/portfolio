import { Component, inject } from '@angular/core';

import { ContactModalComponent } from '../../features/contact-modal-component/contact-modal-component';
import { CvModalComponent } from '../../features/cv-modal-component/cv-modal-component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.scss',
})
export class MenuComponent {
  private dialog = inject(MatDialog);

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
}
