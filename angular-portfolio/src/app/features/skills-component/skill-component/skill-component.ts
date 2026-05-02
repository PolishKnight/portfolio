import { Component, Input, inject } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { Skill } from '../skill-interface';
import { SkillModalComponent } from './modals/skill-modal-component/skill-modal-component';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill-component.html',
  styleUrl: './skill-component.scss',
})
export class SkillComponent {
  private dialog = inject(MatDialog);

  @Input({ required: true }) skill!: Skill;
  @Input({ required: true }) categoryTitle!: { pl: string; en: string };

  secoundColor(color: string): string {
    return `color-mix(in srgb, ${color}, black 20%)`;
  }

  openSkill(): void {
    this.dialog.open(SkillModalComponent, {
      width: '90%',
      panelClass: 'custom-modal',
      data: {
        skill: this.skill,
        categoryTitle: this.categoryTitle,
      },
    });
  }
}
