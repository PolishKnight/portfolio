import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-info-modal-component',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './info-modal-component.html',
})
export class InfoModalComponent {
  public dialogRef = inject(MatDialogRef<InfoModalComponent>);
  public data = inject(MAT_DIALOG_DATA);

  close() {
    this.dialogRef.close();
  }
}
