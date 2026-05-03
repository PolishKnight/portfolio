import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { InfoModalComponent } from '../info-modal-component/info-modal-component';
import { strings } from './strings';
import { BaseComponent } from '../../../core/base-component';

@Component({
  selector: 'app-contact-modal-component',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './contact-modal-component.html',
  styleUrl: './contact-modal-component.scss',
})
export class ContactModalComponent extends BaseComponent<typeof strings> {
  public dialogRef = inject(MatDialogRef<ContactModalComponent>);
  private dialog = inject(MatDialog);
  private http = inject(HttpClient);

  constructor() {
    super(strings);
  }

  email = '';
  message = '';

  close() {
    this.dialogRef.close();
  }

  send() {
    const payload = {
      email: this.email,
      message: this.message,
      _subject: 'Nowa wiadomość z Portfolio',
      _captcha: 'false',
    };

    const endpoint = 'https://formsubmit.co/ajax/mlewandowski.contact@gmail.com';

    this.http.post(endpoint, payload).subscribe({
      next: () => {
        this.dialogRef.close();
        this.openInfo('Dziękuję za wiadomość!', 'Wiadomość została wysłana pomyślnie.');
      },
      error: () => {
        this.dialogRef.close();
        this.openInfo('Wystąpił błąd!', 'Proszę spróbować później lub wybrać inną opcję kontaktu.');
      },
    });
  }

  openInfo(title: string, description: string) {
    this.dialog.open(InfoModalComponent, {
      width: '90%',
      panelClass: 'custom-modal',
      data: {
        title: title,
        description: description,
      },
    });
  }
}
