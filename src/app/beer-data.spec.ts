import { TestBed } from '@angular/core/testing';

import { BeerData } from './beer-data';

describe('BeerData', () => {
  let service: BeerData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeerData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
