import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gasto } from 'src/app/model/gasto';
import { GastoService } from 'src/app/services/gasto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-gasto',
  templateUrl: './edit-gasto.component.html',
  styleUrls: ['./edit-gasto.component.css']
})
export class EditGastoComponent implements OnInit {
  gasto: Gasto = null;
  constructor(
    private gastoservice: GastoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.gastoservice.detail(id).subscribe({
      next: (data) => {
        //pregunta
        Swal.fire({
          title: 'Desea editar este gasto?',
          // text: '¡No podrás revertir esto!',
          icon: 'warning',
          showCancelButton: true,
          cancelButtonText: 'Cancelar',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, Editar!',
        }).then((result) => {
          if (result.isConfirmed) {
            this.gasto = data;
          }else{
            this.router.navigate(['gastos']);
          }
        });
      },
      error: (err) => {
        Swal.fire('Error!', 'No se pudo realizar la acción.', 'error');
        this.router.navigate(['gastos']);
      },
    });
  }
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.gastoservice.update(id, this.gasto).subscribe({
      next: (data) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'El gasto modificado correctamente.',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['gastos']);
      },
      error: (err) => {
        Swal.fire('Error!', 'No se pudo realizar la acción.', 'error');
        this.router.navigate(['gastos']);
      },
    });
  }
}
