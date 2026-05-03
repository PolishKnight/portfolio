import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BaseComponent } from '../../../core/base-component';

export const strings = {};

@Component({
  selector: 'app-info-modal-component',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './info-modal-component.html',
})
export class InfoModalComponent extends BaseComponent<typeof strings> {
  public dialogRef = inject(MatDialogRef<InfoModalComponent>);
  public data = inject(MAT_DIALOG_DATA);

  constructor() {
    super(strings);
  }

  close() {
    this.dialogRef.close();
  }
}
