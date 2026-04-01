import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class BeerCartService{
    addToCart(beer: any){
        throw new Error('Method not implemented.');
    }

    constructor() {}
}
