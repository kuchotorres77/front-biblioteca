import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLibroComponent } from './components/libro/add-libro.component';
import { EditLibroComponent } from './components/libro/edit-libro.component';
import { LibroComponent } from './components/libro/libro.component';

const routes: Routes = [
  {path: "", component: LibroComponent },
  {path: "nuevo", component: AddLibroComponent },
  {path: "editar/:id", component: EditLibroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
