import { BaseComponent } from '../../core/base-component';
import { Component } from '@angular/core';
import { SkillComponent } from './skill-component/skill-component';
import { strings } from './strings';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillComponent],
  templateUrl: './skills-component.html',
  styleUrl: './skills-component.scss',
})
export class SkillsComponent extends BaseComponent<typeof strings> {
  categories = strings.skills.categories;

  constructor() {
    super(strings);
  }
}
