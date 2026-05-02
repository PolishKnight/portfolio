import { BaseComponent } from '../../core/base-component';
import { Component } from '@angular/core';
import { strings } from './strings';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience-component.html',
  styleUrl: './experience-component.scss',
})
export class ExperienceComponent extends BaseComponent<typeof strings> {
  constructor() {
    super(strings);
  }
}
