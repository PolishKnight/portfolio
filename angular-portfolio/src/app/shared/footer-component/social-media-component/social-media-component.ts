import { Component } from '@angular/core';
import { SocialButtonComponent } from './social-button-component/social-button-component';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [SocialButtonComponent],
  templateUrl: './social-media-component.html',
  styleUrl: './social-media-component.scss',
})
export class SocialMediaComponent {}
