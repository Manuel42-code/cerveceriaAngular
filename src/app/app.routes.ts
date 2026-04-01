import { Routes } from '@angular/router';

import { CerveceriaCervezas } from './cerveceria-cervezas/cerveceria-cervezas';
import { CerveceriaAbout } from './cerveceria-about/cerveceria-about';


export const routes: Routes =[
      { path: '', redirectTo: 'cervezas', pathMatch: 'full' },
  { path: 'cervezas', component: CerveceriaCervezas },
  { path: 'about', component: CerveceriaAbout }
];
