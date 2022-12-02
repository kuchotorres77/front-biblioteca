import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gasto } from 'src/app/model/gasto';
import { GastoService } from 'src/app/services/gasto.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-gasto',
  templateUrl: './add-gasto.component.html',
  styleUrls: ['./add-gasto.component.css']
})
export class AddGastoComponent implements OnInit {
  monto: number = null;
  cuenta: string = '';
  categoria: string = '';
  detalle: string = '';
  fecha: Date = new Date();

  constructor(private gastoserv: GastoService, private router: Router) { }
  ngOnInit(): void {
    this.cuenta = 'Seleccione un cuenta';
    this.categoria = 'Seleccione un categoria';
    // const tiempoTranscurrido = Date.now();
    // const hoy = new Date();
    // this.fecha = hoy.toLocaleDateString();

  }
  onCreate(): void {
    const gasto = new Gasto(
      this.monto,
      this.cuenta,
      this.categoria,
      this.detalle,
      this.fecha,
    );
    // console.log(libro);
    this.gastoserv.save(gasto).subscribe({
      next: (data) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Gasto agregado correctamente.',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['gastos']);
      },
      error: (err) => {
        Swal.fire('Error!', 'No se pudo realizar la acción.', 'error');
        this.router.navigate(['gasto/nuevo']);
      },
    });
  }
}
