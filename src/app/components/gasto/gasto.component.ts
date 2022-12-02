import { Component } from '@angular/core';
import { Gasto } from '../../model/gasto';
import { GastoService } from '../../services/gasto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
  styleUrls: ['./gasto.component.css']
})
export class GastoComponent {
  gastos: Gasto[] = [];
  constructor(private gastoservicio: GastoService) { }

  ngOnInit(): void {
    this.cargarGastos();
  }
  cargarGastos(): void {
    this.gastoservicio.list().subscribe((data) => {
      this.gastos = data;
    });
  }

  borrar(id?: number) {
    Swal.fire({
      title: 'Desea eliminar gasto?',
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
          this.gastoservicio.delete(id).subscribe({
            next: (data) => {
              Swal.fire(
                'Eliminado!',
                'Gasto eliminado correctamente.',
                'success'
              );
              this.cargarGastos();
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
