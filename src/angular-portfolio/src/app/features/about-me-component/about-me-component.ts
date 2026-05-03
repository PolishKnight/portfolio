import { BaseComponent } from '../../core/base-component';
import { Component } from '@angular/core';
import { strings } from './strings';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me-component.html',
  styleUrl: './about-me-component.scss',
})
export class AboutMeComponent extends BaseComponent<typeof strings> {
  constructor() {
    super(strings);
  }
}
