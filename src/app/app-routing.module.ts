import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGastoComponent } from './components/gasto/add-gasto.component';
import { EditGastoComponent } from './components/gasto/edit-gasto.component';
import { GastoComponent } from './components/gasto/gasto.component';
import { HomeComponent } from './components/home/home.component';
import { AddLibroComponent } from './components/libro/add-libro.component';
import { EditLibroComponent } from './components/libro/edit-libro.component';
import { LibroComponent } from './components/libro/libro.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "biblioteca", component: LibroComponent },
  {path: "nuevo", component: AddLibroComponent },
  {path: "editar/:id", component: EditLibroComponent },
  {path: "gastos", component: GastoComponent},
  {path: "gasto/nuevo", component: AddGastoComponent},
  {path: "gasto/editar/:id", component: EditGastoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
