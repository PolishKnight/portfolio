import { AboutMeComponent } from '../about-me-component/about-me-component';
import { Component } from '@angular/core';
import { ExperienceComponent } from '../experience-component/experience-component';
import { ProjectsComponent } from '../projects-component/projects-component';
import { SkillsComponent } from '../skills-component/skills-component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AboutMeComponent, SkillsComponent, ExperienceComponent, ProjectsComponent],
  templateUrl: './main-component.html',
  styleUrl: './main-component.scss',
})
export class MainComponent {}
