import { Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { InfoModalComponent } from '../info-modal-component/info-modal-component';

@Component({
  selector: 'app-contact-modal-component',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  templateUrl: './contact-modal-component.html',
  styleUrl: './contact-modal-component.scss',
})
export class ContactModalComponent {
  public dialogRef = inject(MatDialogRef<ContactModalComponent>);
  private dialog = inject(MatDialog);
  private http = inject(HttpClient);

  email = '';
  message = '';

  close() {
    this.dialogRef.close();
  }

  send() {
    if (this.isValid()) {
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
          this.openInfo(
            'Wystąpił błąd!',
            'Proszę spróbować później lub wybrać inną opcję kontaktu.',
          );
        },
      });
    }
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

  isValid(): boolean {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    const messageValid = this.message.trim().length > 0;

    return emailValid && messageValid;
  }
}
