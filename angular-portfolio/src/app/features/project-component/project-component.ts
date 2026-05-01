import { Component, Input } from '@angular/core';

import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './project-component.html',
  styleUrl: './project-component.scss',
})
export class ProjectComponent {
  @Input() title!: string;
  @Input() description!: string;
}
