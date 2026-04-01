import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Beer } from '../beer-list/Beer';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-number',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-number.html',
  styleUrl: './input-number.scss',
})
export class InputNumber {

  constructor() {}

  @Input()
  quantity!: number;
  @Input()
  max!: number;

  @Output()
  maxReached: EventEmitter<String> = new EventEmitter<String>();

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  upQuantity(): void{
    if(this.quantity < this.max){
      this.quantity ++;
      this.quantityChange.emit(this.quantity); 
    }else{
      this.maxReached.emit("Ya no quedan mas cervezas en stock");
    }
  }

  downQuantity(): void{
    if(this.quantity > 0){
      this.quantity --;
      this.quantityChange.emit(this.quantity); 
    }
  }
}
