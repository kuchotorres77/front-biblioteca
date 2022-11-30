import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';
import { Libro } from '../../model/libro';
import { LibroService } from '../../services/libro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css'],
})
export class LibroComponent implements OnInit {
  libros: Libro[] = [];
  constructor(private libroservicio: LibroService) {}

  ngOnInit(): void {
    this.cargarLibros();
  }
  cargarLibros(): void {
    //this.LIBROSERVICIO.LIST().subscribe(data => {this.libros = data;})  }
    this.libroservicio.list().subscribe((data) => {
      this.libros = data;
    });
  }

  borrar(id?: number) {
    Swal.fire({
      title: 'Desea eliminar el libro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!',
    }).then((result) => {
      if (result.isConfirmed) {
        if (id != undefined) {
          this.libroservicio.delete(id).subscribe({
            next: (data) => {
              Swal.fire(
                'Eliminado!',
                'El libro ha sido eliminado correctamente.',
                'success'
              );
              this.cargarLibros();
            },
            error: (err) => {
              Swal.fire('Error!', 'No se pudo realizar la acción.', 'error');
            },
          });
        } else {
          Swal.fire('Error!', 'Id no definido.', 'error');
        }
      }
    });
  }
}
