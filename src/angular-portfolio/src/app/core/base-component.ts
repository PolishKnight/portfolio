import { LanguageService } from './language-service';
import { coreStrings } from './core-strings';
import { inject } from '@angular/core';

export class BaseComponent<T> {
  public s: T;
  public cs = coreStrings;
  public langService = inject(LanguageService);

  constructor(localStrings: T) {
    this.s = localStrings;
  }
}
