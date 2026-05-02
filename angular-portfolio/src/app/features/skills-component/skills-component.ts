import { BaseComponent } from '../../core/base-component';
import { Category } from './category-interface';
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
  categories: Category[] = [
    {
      title: { pl: 'Frontend', en: 'Frontend' },
      skills: [
        { name: 'Angular', iconSrc: 'skills/angular.png', color: '#DD0031' },
        { name: 'HTML', iconSrc: 'skills/html.png', color: '#E34F26' },
        { name: 'CSS', iconSrc: 'skills/css.png', color: '#1572B6' },
        { name: 'SCSS', iconSrc: 'skills/scss.png', color: '#CF649A' },
        { name: 'JavaScript', iconSrc: 'skills/js.png', color: '#F7DF1E' },
        { name: 'TypeScript', iconSrc: 'skills/ts.png', color: '#3178C6' },
        { name: 'RxJS', iconSrc: 'skills/rxjs.png', color: '#B7178C' },
      ],
    },
    {
      title: { pl: 'Backend, Bazy danych', en: 'Backend, Databases' },
      skills: [
        { name: 'PHP', iconSrc: 'skills/php.png', color: '#777BB4' },
        { name: 'MySQL', iconSrc: 'skills/mysql.png', color: '#00758F' },
        { name: 'PostgreSQL', iconSrc: 'skills/pgadmin.png', color: '#336791' },
        { name: 'Firebase', iconSrc: 'skills/firebase.png', color: '#FFCA28' },
        { name: 'JSON', iconSrc: 'skills/json.png', color: '#292929' },
      ],
    },
    {
      title: { pl: '.NET i GameDev', en: '.NET & GameDev' },
      skills: [
        { name: 'C#', iconSrc: 'skills/cs.png', color: '#239120' },
        { name: 'WPF', iconSrc: 'skills/wpf.png', color: '#512BD4' },
        { name: 'Unity', iconSrc: 'skills/unity.png', color: '#000000' },
      ],
    },
    {
      title: { pl: 'Pozostałe', en: 'Other' },
      skills: [
        { name: 'Java', iconSrc: 'skills/java.png', color: '#007396' },
        { name: 'C++', iconSrc: 'skills/cpp.png', color: '#00599C' },
        { name: 'Python', iconSrc: 'skills/python.png', color: '#3776AB' },
      ],
    },
    {
      title: { pl: 'Narzędzia', en: 'Tools' },
      skills: [
        { name: 'Git', iconSrc: 'skills/git.png', color: '#F05032' },
        { name: 'GitHub', iconSrc: 'skills/github.png', color: '#181717' },
        { name: 'Gimp', iconSrc: 'skills/gimp.png', color: '#5C5543' },
      ],
    },
  ];

  constructor() {
    super(strings);
  }
}
