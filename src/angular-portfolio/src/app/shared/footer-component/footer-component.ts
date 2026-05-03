import { Component } from '@angular/core';
import { SocialMediaComponent } from './social-media-component/social-media-component';
import { coreStrings } from '../../core/core-strings';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialMediaComponent],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.scss',
})
export class FooterComponent {
  coreStrings = coreStrings;

  year = new Date().getFullYear();
}
