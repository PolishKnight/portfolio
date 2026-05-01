import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { InfoModalComponent } from './info-modal-component';

describe('InfoModalComponent', () => {
  let component: InfoModalComponent;
  let fixture: ComponentFixture<InfoModalComponent>;

  const testData = {
    title: 'Sukces!',
    description: 'Twoja wiadomość została wysłana.',
  };

  const mockDialogRef = {
    close: vi.fn(),
  };

  beforeEach(async () => {
    vi.clearAllMocks();
    TestBed.resetTestingModule();

    await TestBed.configureTestingModule({
      imports: [InfoModalComponent],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: testData },
      ],
    })
      .overrideComponent(InfoModalComponent, {
        set: {
          providers: [
            { provide: MatDialogRef, useValue: mockDialogRef },
            { provide: MAT_DIALOG_DATA, useValue: testData },
          ],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(InfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the injected title', () => {
    const titleElement = fixture.nativeElement.querySelector('h2');
    expect(titleElement.textContent).toContain(testData.title);
  });

  it('should render the injected description', () => {
    const pElement = fixture.nativeElement.querySelector('mat-dialog-content p');
    expect(pElement.textContent).toContain(testData.description);
  });

  it('should call close() on dialogRef when the button is clicked', () => {
    const closeBtn = fixture.nativeElement.querySelector('button');
    closeBtn.click();

    expect(mockDialogRef.close).toHaveBeenCalled();
  });

  it('should have a close method that triggers dialog dismissal', () => {
    component.close();
    expect(mockDialogRef.close).toHaveBeenCalled();
  });
});
