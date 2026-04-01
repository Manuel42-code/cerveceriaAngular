import { Component, OnInit } from '@angular/core';
import { Beer } from './Beer';
import { CommonModule  } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { InputNumber } from '../input-number/input-number';
import { BeerCart } from '../beer-cart';
import { BeerData } from '../beer-data';

@Component({
  selector: 'app-beer-list',
  standalone: true,
  imports: [CommonModule, FormsModule, InputNumber],
  templateUrl: './beer-list.html',
  styleUrl: './beer-list.scss',
})
export class BeerList implements OnInit{  

  beers: Beer[] = [];


  constructor(
    private cart: BeerCart,
    private beerData: BeerData){
  }

  ngOnInit(): void {
    this.beerData.getAll().subscribe(beers => {
    console.log('DATA:', beers); // 👈 IMPORTANTE
    this.beers = beers;
  });
  }

  addToCart(beer: Beer): void{
    if (beer.stock >= beer.quantity) {
    this.cart.addToCart(beer);
    beer.stock -= beer.quantity;
    beer.quantity = 0;
    }
  } 

  maxReached(s: String){
    alert(s);
  }


}
