export class Gasto {
  id?: number;
  monto: number;
  cuenta: string;
  categoria: string;
  detalle: string;
  fecha: Date;

  constructor(
    monto: number,
    cuenta: string,
    categoria: string,
    detalle: string,
    fecha: Date
  ) {
    this.monto = monto;
    this.cuenta = cuenta;
    this.categoria = categoria;
    this.detalle = detalle;
    this.fecha = fecha;
  }
}


        