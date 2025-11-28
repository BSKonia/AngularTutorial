import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Despliegue } from './despliegue';

describe('Despliegue', () => {
  let component: Despliegue;
  let fixture: ComponentFixture<Despliegue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Despliegue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Despliegue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
