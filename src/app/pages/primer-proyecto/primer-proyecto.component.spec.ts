import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerProyecto } from './primer-proyecto';

describe('PrimerProyecto', () => {
  let component: PrimerProyecto;
  let fixture: ComponentFixture<PrimerProyecto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimerProyecto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimerProyecto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
