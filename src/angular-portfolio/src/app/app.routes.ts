import { MainComponent } from './features/main-component/main-component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: '**', redirectTo: '' },
];
