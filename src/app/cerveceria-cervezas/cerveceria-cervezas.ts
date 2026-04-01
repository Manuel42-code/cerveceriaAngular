import { Component } from '@angular/core';

import { BeerList } from '../beer-list/beer-list';
import { CerveceriaAbout } from '../cerveceria-about/cerveceria-about';
import { Carrito} from '../carrito/carrito';
import { CommonModule } from '@angular/common';

@Component({
   standalone: true,
  selector: 'app-cerveceria-cervezas',
  imports: [BeerList, CerveceriaAbout, Carrito, CommonModule],
  templateUrl: './cerveceria-cervezas.html',
  styleUrl: './cerveceria-cervezas.scss',
})
export class CerveceriaCervezas {}
