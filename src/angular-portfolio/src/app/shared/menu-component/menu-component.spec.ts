import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactModalComponent } from '../../features/modals/contact-modal-component/contact-modal-component';
import { CvModalComponent } from '../../features/modals/cv-modal-component/cv-modal-component';
import { MatDialog } from '@angular/material/dialog';
import { MenuComponent } from './menu-component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  const mockDialog = {
    open: vi.fn(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent],
      providers: [{ provide: MatDialog, useValue: mockDialog }],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open contact modal when openContact is called', () => {
    component.openContact();

    expect(mockDialog.open).toHaveBeenCalledWith(
      ContactModalComponent,
      expect.objectContaining({ panelClass: 'custom-modal' }),
    );
  });

  it('should trigger openContact when the contact button is clicked', () => {
    const spy = vi.spyOn(component, 'openContact');

    const contactBtn = fixture.nativeElement.querySelector('[data-testid="contact-button"]');
    contactBtn.click();

    expect(spy).toHaveBeenCalled();
  });

  it('should open cv modal when openCv is called', () => {
    component.openCv();

    expect(mockDialog.open).toHaveBeenCalledWith(
      CvModalComponent,
      expect.objectContaining({ panelClass: 'custom-modal' }),
    );
  });

  it('should trigger openCv when the contact button is clicked', () => {
    const spy = vi.spyOn(component, 'openCv');

    const cvBtn = fixture.nativeElement.querySelector('[data-testid="cv-button"]');
    cvBtn.click();

    expect(spy).toHaveBeenCalled();
  });
});
