import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from '../model/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  // URL = "http://localhost:8080/api/"
  URL = "api-biblioteca-production.up.railway.app"
  constructor(private httpClient: HttpClient) { }
  //create
  public save(libro: Libro):Observable<any>{
    return this.httpClient.post<any>(this.URL + 'crear', libro)
  }
  //read
  public list():Observable<Libro[]>{
    return this.httpClient.get<Libro[]>(this.URL + 'vertodos');
  }
  public detail(id:number):Observable<Libro>{
    return this.httpClient.get<Libro>(this.URL + `ver/${id}`);
  }

  //delete
  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }
  //update
  public update(id:number, libro:Libro):Observable<any>{
    return this.httpClient.put<any>(this.URL + `editar/${id}`, libro);
  }
}
