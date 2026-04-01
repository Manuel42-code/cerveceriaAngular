import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerveceriaAbout } from './cerveceria-about';

describe('CerveceriaAbout', () => {
  let component: CerveceriaAbout;
  let fixture: ComponentFixture<CerveceriaAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CerveceriaAbout],
    }).compileComponents();

    fixture = TestBed.createComponent(CerveceriaAbout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
