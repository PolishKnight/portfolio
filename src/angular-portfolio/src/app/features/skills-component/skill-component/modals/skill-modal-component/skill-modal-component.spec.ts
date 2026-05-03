import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { SkillModalComponent } from './skill-modal-component';

describe('SkillModalComponent', () => {
  let component: SkillModalComponent;
  let fixture: ComponentFixture<SkillModalComponent>;

  const mockSkillData = {
    skill: {
      name: 'Angular',
      color: '#dd0031',
      iconSrc: 'assets/angular.svg',
      description: {
        pl: 'Opis po polsku',
        en: 'English description',
      },
    },
    categoryTitle: {
      pl: 'Frontend',
      en: 'Frontend',
    },
  };

  const mockDialogRef = {
    close: vi.fn(),
  };

  beforeEach(async () => {
    vi.clearAllMocks();

    await TestBed.configureTestingModule({
      imports: [SkillModalComponent],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: mockSkillData },
      ],
    })
      .overrideComponent(SkillModalComponent, {
        set: {
          providers: [
            { provide: MatDialogRef, useValue: mockDialogRef },
            { provide: MAT_DIALOG_DATA, useValue: mockSkillData },
          ],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(SkillModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should render skill name and category in Polish', () => {
    const h2 = fixture.nativeElement.querySelector('h2');
    expect(h2.textContent).toContain(mockSkillData.skill.name);

    const badge = fixture.nativeElement.querySelector('.category-badge');
    expect(badge.textContent).toContain(mockSkillData.categoryTitle.pl);
  });

  it('should apply custom color from data to styles', () => {
    const modalDiv = fixture.nativeElement.querySelector('.skill-modal');
    const iconWrapper = fixture.nativeElement.querySelector('.icon-wrapper');

    expect(modalDiv.style.getPropertyValue('--skill-color')).toBe(mockSkillData.skill.color);
    expect(iconWrapper.style.backgroundColor).toBeTruthy();
  });

  it('should render correct description based on language', () => {
    const p = fixture.nativeElement.querySelector('.description-container p');
    expect(p.textContent).toBe(mockSkillData.skill.description.pl);
  });

  it('should call close() and trigger dialogRef.close when button is clicked', () => {
    const closeBtn = fixture.nativeElement.querySelector('.close-btn');
    closeBtn.click();

    expect(mockDialogRef.close).toHaveBeenCalledTimes(1);
  });

  it('should have correct image source and alt text', () => {
    const img = fixture.nativeElement.querySelector('img');
    expect(img.src).toContain(mockSkillData.skill.iconSrc);
    expect(img.alt).toBe(mockSkillData.skill.name + ' logo');
  });
});
