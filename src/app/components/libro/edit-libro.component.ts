import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from 'src/app/model/libro';
import { LibroService } from 'src/app/services/libro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-libro',
  templateUrl: './edit-libro.component.html',
  styleUrls: ['./edit-libro.component.css'],
})
export class EditLibroComponent implements OnInit {
  libro: Libro = null;

  constructor(
    private libroservice: LibroService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.libroservice.detail(id).subscribe({
      next: (data) => {
        //pregunta
        Swal.fire({
          title: 'Desea editar este libro?',
          // text: '¡No podrás revertir esto!',
          icon: 'warning',
          showCancelButton: true,
          cancelButtonText: 'Cancelar',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, Editar!',
        }).then((result) => {
          if (result.isConfirmed) {
            this.libro = data;
          }else{
            this.router.navigate(['']);
          }
        });
      },
      error: (err) => {
        Swal.fire('Error!', 'No se pudo realizar la acción.', 'error');
        this.router.navigate(['']);
      },
    });
  }
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.libroservice.update(id, this.libro).subscribe({
      next: (data) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El libro modificado correctamente.',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['']);
      },
      error: (err) => {
        Swal.fire('Error!', 'No se pudo realizar la acción.', 'error');
        this.router.navigate(['']);
      },
    });
  }
}
