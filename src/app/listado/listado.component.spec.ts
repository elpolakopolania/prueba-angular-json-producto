import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoComponent } from './listado.component';

describe('ListadoComponent', () => {
  let component: ListadoComponent;
  let fixture: ComponentFixture<ListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`EL estado del primer registro de la variable listadoProductosBloq deberia ser 'Bloqueado'`, () => {
    const app = fixture.componentInstance;
    console.log('EL estado del primer...', app.listadoProductosBloq[0]['estado']);
    expect(app.listadoProductosBloq[0]['estado']).toEqual('Bloqueado');
  });
});
