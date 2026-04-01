import { TestBed } from '@angular/core/testing';

import { BeerCart } from './beer-cart';

describe('BeerCart', () => {
  let service: BeerCart;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeerCart);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
