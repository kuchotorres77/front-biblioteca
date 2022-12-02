import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/model/libro';
import { LibroService } from 'src/app/services/libro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-libro',
  templateUrl: './add-libro.component.html',
  styleUrls: ['./add-libro.component.css'],
})
export class AddLibroComponent implements OnInit {
  nombre: string = '';
  autor: string = '';
  editorial: string = '';
  anio!: number;
  fueLeido!: boolean;
  formato: string = '';

  constructor(private libroserv: LibroService, private router: Router) {}
  ngOnInit(): void {
    this.formato = 'Seleccione un formato';
  }
  onCreate(): void {
    const libro = new Libro(
      this.nombre,
      this.autor,
      this.editorial,
      this.anio,
      this.fueLeido,
      this.formato
    );
    // console.log(libro);
    this.libroserv.save(libro).subscribe({
      next: (data) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El libro ha sido agregado correctamente.',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['biblioteca']);
      },
      error: (err) => {
        Swal.fire('Error!', 'No se pudo realizar la acción.', 'error');
        this.router.navigate(['nuevo']);
      },
    });
  }
}
