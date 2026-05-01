import { ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { SocialMediaComponent } from './social-media-component';

describe('SocialMediaComponent', () => {
  let component: SocialMediaComponent;
  let fixture: ComponentFixture<SocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialMediaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SocialMediaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all 4 social buttons', () => {
    const buttons = fixture.debugElement.queryAll(By.css('app-social-button'));
    expect(buttons.length).toBe(4);
  });
});
