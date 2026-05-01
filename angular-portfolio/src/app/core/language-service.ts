import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  currentLang: 'pl' | 'en' = 'pl';

  setLanguage(lang: 'pl' | 'en') {
    this.currentLang = lang;
  }

  toggleLanguage() {
    this.currentLang = this.currentLang === 'pl' ? 'en' : 'pl';
    console.log(this.currentLang);
  }
}
