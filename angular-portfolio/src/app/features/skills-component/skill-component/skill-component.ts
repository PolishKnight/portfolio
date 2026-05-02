import { Component, Input } from '@angular/core';

import { Skill } from '../skill-interface';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill-component.html',
  styleUrl: './skill-component.scss',
})
export class SkillComponent {
  @Input({ required: true }) skill!: Skill;

  secoundColor(color: string): string {
    return `color-mix(in srgb, ${color}, black 20%)`;
  }
}
