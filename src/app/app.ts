import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BeerList } from './beer-list/beer-list';
import { CerveceriaAbout } from './cerveceria-about/cerveceria-about';
import { Carrito} from './carrito/carrito';

import { FormsModule } from '@angular/forms';
import { CerveceriaCervezas } from "./cerveceria-cervezas/cerveceria-cervezas";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BeerList, FormsModule, Carrito, CerveceriaAbout, CerveceriaCervezas],
templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('cerveceria');
  titulo = 'Cerveceria La Serrana';
}
