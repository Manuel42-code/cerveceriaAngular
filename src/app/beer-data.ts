import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Beer } from './beer-list/Beer';

const URL = 'https://69c3d91ab780a9ba03e81e15.mockapi.io/cervezas';

@Injectable({
  providedIn: 'root',
})
export class BeerData {
  constructor(private http: HttpClient){}

  /**
   *
   * Consume la API de cervezas y devuelve un observable a la respesta
   */
  public getAll(): Observable<Beer[]>{
    //fetch('url', {method: 'GET'})
    return this.http.get<Beer[]>(URL)
                  .pipe(
                    tap( (beers: Beer[])=>
                      beers.forEach(beer => beer.quantity = 0))
                  );

  }


}
