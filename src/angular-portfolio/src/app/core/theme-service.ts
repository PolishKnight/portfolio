import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  currentTheme: 'dark' | 'light' = 'light';

  constructor() {
    const saved = localStorage.getItem('theme') as 'dark' | 'light';
    if (saved) {
      this.setTheme(saved);
    }
  }

  setTheme(theme: 'dark' | 'light') {
    this.currentTheme = theme;
    this.updateBodyClass();
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.updateBodyClass();
  }

  private updateBodyClass() {
    document.body.classList.toggle('dark-theme', this.currentTheme === 'dark');
    document.body.classList.toggle('light-theme', this.currentTheme === 'light');
    document.body.style.colorScheme = this.currentTheme;
    localStorage.setItem('theme', this.currentTheme);
  }
}
