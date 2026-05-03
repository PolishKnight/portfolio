import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvModalComponent } from './cv-modal-component';
import { MatDialogRef } from '@angular/material/dialog';

describe('CvModalComponent', () => {
  let component: CvModalComponent;
  let fixture: ComponentFixture<CvModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvModalComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {},
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CvModalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
