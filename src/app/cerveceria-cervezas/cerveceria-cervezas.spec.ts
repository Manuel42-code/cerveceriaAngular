import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerveceriaCervezas } from './cerveceria-cervezas';

describe('CerveceriaCervezas', () => {
  let component: CerveceriaCervezas;
  let fixture: ComponentFixture<CerveceriaCervezas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CerveceriaCervezas],
    }).compileComponents();

    fixture = TestBed.createComponent(CerveceriaCervezas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
