import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { CvModalComponent } from '../cv-modal-component/cv-modal-component';
import { MatDialogRef } from '@angular/material/dialog';

describe('CvModalComponent', () => {
  let component: CvModalComponent;
  let fixture: ComponentFixture<CvModalComponent>;

  const mockDialogRef = {
    close: vi.fn(),
  };

  beforeEach(async () => {
    vi.clearAllMocks();
    TestBed.resetTestingModule();

    await TestBed.configureTestingModule({
      imports: [CvModalComponent],
      providers: [{ provide: MatDialogRef, useValue: mockDialogRef }],
    })
      .overrideComponent(CvModalComponent, {
        set: {
          providers: [{ provide: MatDialogRef, useValue: mockDialogRef }],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(CvModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call close on dialogRef when close() is called', () => {
    component.close();
    expect(mockDialogRef.close).toHaveBeenCalled();
  });

  it('should have iframe with correct source', () => {
    const iframe = fixture.nativeElement.querySelector('iframe');
    expect(iframe.src).toContain('cv.pdf');
  });

  it('should have a download link with correct attributes', () => {
    const downloadBtn = fixture.nativeElement.querySelector('a[download]');

    expect(downloadBtn.getAttribute('href')).toBe('cv.pdf');
    expect(downloadBtn.getAttribute('target')).toBe('_blank');
    expect(downloadBtn.getAttribute('rel')).toBe('noopener');
    expect(downloadBtn.hasAttribute('download')).toBe(true);
  });

  it('should call close() method when exit button is clicked', () => {
    const closeSpy = vi.spyOn(component, 'close');
    const exitBtn = fixture.nativeElement.querySelector('button[mat-button]');

    exitBtn.click();

    expect(closeSpy).toHaveBeenCalled();
  });
});
