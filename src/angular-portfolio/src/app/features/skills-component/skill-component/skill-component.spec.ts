import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Skill } from '../skill-interface';
import { SkillComponent } from './skill-component';

describe('SkillComponent', () => {
  let component: SkillComponent;
  let fixture: ComponentFixture<SkillComponent>;

  const mockSkill: Skill = {
    name: 'Angular',
    iconSrc: 'skills/angular.png',
    color: '#DD0031',
    description: { pl: 'Przykładowy opis', en: 'Example description' },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillComponent);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('skill', mockSkill);

    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correctly assigned skill name', () => {
    expect(component.skill.name).toBe('Angular');
  });

  it('should generate secondary color using color-mix', () => {
    const result = component.secoundColor('#DD0031');
    expect(result).toContain('color-mix(in srgb, #DD0031, black 20%)');
  });
});
