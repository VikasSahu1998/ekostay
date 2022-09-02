import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkostayVillaBlancoComponent } from './ekostay-villa-blanco.component';

describe('EkostayVillaBlancoComponent', () => {
  let component: EkostayVillaBlancoComponent;
  let fixture: ComponentFixture<EkostayVillaBlancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkostayVillaBlancoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EkostayVillaBlancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
