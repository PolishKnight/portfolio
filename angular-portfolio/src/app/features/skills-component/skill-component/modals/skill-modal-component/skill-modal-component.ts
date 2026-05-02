import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BaseComponent } from '../../../../../core/base-component';
import { MatButtonModule } from '@angular/material/button';

export const strings = {};

@Component({
  selector: 'app-skill-modal-component',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './skill-modal-component.html',
  styleUrl: './skill-modal-component.scss',
})
export class SkillModalComponent extends BaseComponent<typeof strings> {
  public dialogRef = inject(MatDialogRef<SkillModalComponent>);
  public data = inject(MAT_DIALOG_DATA);

  constructor() {
    super(strings);
  }

  close() {
    this.dialogRef.close();
  }
}
