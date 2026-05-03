import { BaseComponent } from '../../core/base-component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImgPaths } from '../../core/img-paths';
import { strings as skillsStrings } from '../skills-component/strings';
import { strings } from './strings';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-component.html',
  styleUrl: './experience-component.scss',
})
export class ExperienceComponent extends BaseComponent<typeof strings> {
  constructor() {
    super(strings);
  }

  getTechName(path: string): string {
    const entry = Object.entries(ImgPaths).find(([_, value]) => value === path);
    return entry ? entry[0] : 'Tech';
  }

  getTechColor(path: string): string {
    for (const category of skillsStrings.skills.categories) {
      const skill = category.skills.find((s) => s.iconSrc === path);
      if (skill) return skill.color;
    }
    return '#1f1f1f';
  }
}
