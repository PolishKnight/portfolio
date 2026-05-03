import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { strings } from './strings';
import { BaseComponent } from '../../../core/base-component';

@Component({
  selector: 'app-cv-modal-component',
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './cv-modal-component.html',
  styleUrl: './cv-modal-component.scss',
})
export class CvModalComponent extends BaseComponent<typeof strings> {
  public dialogRef = inject(MatDialogRef<CvModalComponent>);

  constructor() {
    super(strings);
  }

  close() {
    this.dialogRef.close();
  }
}
