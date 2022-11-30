export class Libro {
  id?: number;
  nombre: string;
  autor: string;
  editorial: string;
  anio: number;
  fueLeido: boolean;
  formato: string;

  constructor(
    nombre: string,
    autor: string,
    editorial: string,
    anio: number,
    fueLeido: boolean,
    formato: string
  ) {
    this.nombre = nombre;
    this.autor = autor;
    this.editorial = editorial;
    this.anio = anio;
    this.fueLeido = fueLeido;
    this.formato = formato;
  }
}
