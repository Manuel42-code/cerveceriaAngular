import { Injectable } from '@angular/core';
import { Beer } from './beer-list/Beer';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class BeerCart {

  private _cartList: Beer[] = [];
  cartList: BehaviorSubject<Beer[]> = new BehaviorSubject(this._cartList);

  constructor(){}

  addToCart(beer: Beer){
    let item = this._cartList.find((v1) => v1.name == beer.name);
    if(!item){
      console.log("compraste las cervezas")
      this._cartList.push({...beer});
    }else{
      item.quantity += beer.quantity;
    }
    
    this.cartList.next(this._cartList); //equivalente el emitt de eventos
  }

}
