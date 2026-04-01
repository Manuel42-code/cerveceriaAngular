import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CerveceriaCervezas } from '../../cerveceria-cervezas/cerveceria-cervezas';
import { CerveceriaAbout } from '../../cerveceria-about/cerveceria-about';

const routes: Routes =  [
    {
        path: '',
        redirectTo: 'cervezas'
    },
    {
        path: 'cervezas',
        component: CerveceriaCervezas
    },
    {
        path: 'about',
        component: CerveceriaAbout
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoModuloRoutingModule {}
