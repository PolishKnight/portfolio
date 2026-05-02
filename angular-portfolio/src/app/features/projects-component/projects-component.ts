import { Component, ElementRef, ViewChild } from '@angular/core';

import { BaseComponent } from '../../core/base-component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { strings } from './strings';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIcon],
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.scss',
})
export class ProjectsComponent extends BaseComponent<typeof strings> {
  @ViewChild('sliderContainer') sliderContainer!: ElementRef;

  projects = this.s.projects;

  constructor() {
    super(strings);
  }

  scroll(direction: 'left' | 'right') {
    const distance = 380;
    if (direction === 'left') {
      this.sliderContainer.nativeElement.scrollBy({ left: -distance, behavior: 'smooth' });
    } else {
      this.sliderContainer.nativeElement.scrollBy({ left: distance, behavior: 'smooth' });
    }
  }
}
