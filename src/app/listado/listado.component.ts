import { Component, OnInit } from '@angular/core';
import { Producto } from '../modelos/Producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  public listadoProductos: any;
  public listadoProductosBloq: any;
  public listadoProductosNoBloq: any;

  constructor(
    private productoService : ProductoService
  ) { 

  }

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos(){
    this.productoService.get().subscribe((datos) => {
      this.listadoProductos = datos;
      this.listadoProductosBloq = this.listadoProductos.filter(producto => producto.estado == 'Bloqueado');
      this.listadoProductosNoBloq = this.listadoProductos.filter(producto => producto.estado != 'Bloqueado');
    });
  }

}
