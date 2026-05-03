import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer-component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the current year in the copyright notice', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const currentYear = new Date().getFullYear().toString();

    const footerText = compiled.querySelector('p')?.textContent;

    expect(footerText).toContain(currentYear);
    expect(footerText).toContain('Mateusz Lewandowski');
  });
});
