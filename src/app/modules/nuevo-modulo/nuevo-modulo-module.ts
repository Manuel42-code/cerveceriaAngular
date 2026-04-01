import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevoModuloRoutingModule } from './nuevo-modulo-routing-module';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, NuevoModuloRoutingModule, HttpClientModule],
})
export class NuevoModuloModule {}
  