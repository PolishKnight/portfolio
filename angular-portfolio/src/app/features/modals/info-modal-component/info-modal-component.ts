import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { coreStrings } from '../../../core/core-strings';
import { LanguageService } from '../../../core/language-service';

@Component({
  selector: 'app-info-modal-component',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './info-modal-component.html',
})
export class InfoModalComponent {
  public dialogRef = inject(MatDialogRef<InfoModalComponent>);
  public data = inject(MAT_DIALOG_DATA);
  public languageService = inject(LanguageService);

  coreStrings = coreStrings;

  close() {
    this.dialogRef.close();
  }
}
