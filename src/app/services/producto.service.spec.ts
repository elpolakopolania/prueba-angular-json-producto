import { TestBed } from '@angular/core/testing';

import { ProductoService } from './producto.service';

describe('ProductoService', () => {
  let service: ProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoService);
  });

  /*it('debe ser creado el servicio ProductoService', () => {
    expect(service).toBeTruthy();
  });*/
});
