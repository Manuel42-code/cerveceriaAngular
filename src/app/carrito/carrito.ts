import { Component } from '@angular/core';
import { BeerCart } from '../beer-cart';
import { Beer } from '../beer-list/Beer';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule],
  templateUrl: './carrito.html',
  styleUrl: './carrito.scss',
})
export class Carrito {

  cartList$: Observable<Beer[]> ;
  constructor(private cart: BeerCart){
    this.cartList$ = cart.cartList.asObservable();
  }



}
