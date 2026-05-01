import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-social-button',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './social-button-component.html',
  styleUrl: './social-button-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialButtonComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) iconClass!: string;
  @Input({ required: true }) link!: string;
  @Input() color = '#333';
}
